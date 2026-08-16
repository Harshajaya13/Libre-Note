/*
This file is part of the Notesnook project (https://notesnook.com/)

Copyright (C) 2023 Streetwriters (Private) Limited

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import { isFeatureAvailable } from "@notesnook/common";
import { Profile, User } from "@notesnook/core";
import { create } from "zustand";
import SettingsService from "../services/settings";
import { presentDialog } from "../components/dialog/functions";
import { strings } from "@notesnook/intl";
import { eSendEvent } from "../services/event-manager";
import { eCloseSimpleDialog } from "../utils/events";
import Navigation from "../services/navigation";

export enum SyncStatus {
  Passed,
  Failed,
  Never
}

export interface UserStore {
  user: User | null | undefined;
  premium: boolean;
  lastSynced: string | number;
  syncing: boolean;
  lastSyncStatus: SyncStatus;
  setUser: (user: User | null | undefined) => void;
  setPremium: (premium: boolean) => void;
  setSyncing: (syncing: boolean, status?: SyncStatus) => void;
  setLastSynced: (lastSynced: number | "Never") => void;
  appLocked: boolean;
  lockApp: (verified: boolean) => void;
  disableAppLockRequests: boolean;
  setDisableAppLockRequests: (disableAppLockRequests: boolean) => void;
  profile?: Partial<Profile>;
  isLoggingOut: boolean;
  setIsLoggingOut: (value: boolean) => void;
  currentSpace: string;
  spaces: string[];
  switchSpace: (spaceName: string) => void;
  addSpace: (spaceName: string) => void;
}

const defaultLibreUser = {
  id: "local-user-personal",
  email: "personal@libre.local",
  name: "Personal Space",
  isEmailConfirmed: true,
  salt: "libre-notes-salt",
  storageUsed: 0,
  subscription: {
    plan: "believer",
    status: "active",
    provider: "libre"
  }
} as any;

export const useUserStore = create<UserStore>((set, get) => ({
  user: defaultLibreUser,
  premium: true,
  profile: {
    name: "Libre Notes",
    email: "personal@libre.local"
  },
  currentSpace: "Personal",
  spaces: ["Personal", "Work", "Private"],
  switchSpace: (spaceName: string) => {
    const spaceUser = {
      ...defaultLibreUser,
      id: `local-user-${spaceName.toLowerCase()}`,
      name: `${spaceName} Space`,
      email: `${spaceName.toLowerCase()}@libre.local`
    };
    set({
      currentSpace: spaceName,
      user: spaceUser,
      profile: {
        name: `${spaceName} Space`,
        email: `${spaceName.toLowerCase()}@libre.local`
      }
    });
  },
  addSpace: (spaceName: string) => {
    const currentSpaces = get().spaces;
    if (!currentSpaces.includes(spaceName)) {
      const updated = [...currentSpaces, spaceName];
      set({ spaces: updated });
      get().switchSpace(spaceName);
    }
  },
  lastSynced: "Never",
  syncing: false,
  appLocked: false,
  setUser: (user) => set({ user: user || defaultLibreUser }),
  setPremium: (premium) => set({ premium: true }),
  setSyncing: (syncing, status = SyncStatus.Passed) => {
    set({ syncing: syncing, lastSyncStatus: status });
  },
  setLastSynced: (lastSynced) => set({ lastSynced: lastSynced }),
  lockApp: (appLocked) => {
    set({ appLocked });
    if (!appLocked) {
      isFeatureAvailable("appLock").then((feature) => {
        if (!feature.isAllowed) {
          SettingsService.setProperty("appLockEnabled", false);
          setTimeout(() => {
            presentDialog({
              title: "App Lock Disabled",
              paragraph: feature?.error,
              positiveText: strings.upgrade(),
              negativeText: strings.cancel(),
              positivePress: async () => {
                eSendEvent(eCloseSimpleDialog);
                if (SettingsService.getProperty("serverUrls")) return;
                Navigation.navigate("PayWall", {
                  context: "logged-in"
                });
              }
            });
          }, 1000);
        }
      });
    }
  },
  lastSyncStatus: SyncStatus.Never,
  disableAppLockRequests: false,
  setDisableAppLockRequests: (disableAppLockRequests) => {
    set({ disableAppLockRequests });
    setTimeout(() => {
      set({ disableAppLockRequests: false });
    }, 1000);
  },
  isLoggingOut: false,
  setIsLoggingOut: (value) => set({ isLoggingOut: value })
}));
