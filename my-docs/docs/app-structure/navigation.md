---
sidebar_position: 2
title: Navigation
---

# Navigation Architecture

This page defines the navigation structure for Phase 1 of **flemingo**.  
It is the canonical guide for how screens are composed, how navigation state flows, and the TypeScript shapes used for screen params. Implement navigation exactly like this so UI, state, and backend expectations stay aligned.

---

## High-level structure

```bash
RootNavigator (decides auth vs main)
├─ AuthStack
│ ├─ PhoneNumberScreen
│ └─ OtpVerificationScreen
└─ AppTabs (Bottom Tabs)
├─ ChatsStack
│ ├─ ChatListScreen
│ └─ ConversationScreen
├─ DirectoryStack
│ └─ UserDirectoryScreen
└─ SettingsStack
├─ SettingsScreen
├─ EditProfileScreen (modal or stack)
└─ BlockedUsersScreen