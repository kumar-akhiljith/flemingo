---
sidebar_position: 1
title: App Screens Overview
---

# App Screens Overview

This page describes all screens included in Phase 1 of the flemingo mobile application and the actions available on each screen. This serves as a reference for development, onboarding, and backend coordination.

## 1. Auth Screens

### 1.1 Phone Number Screen
**Purpose:** Begin authentication  
**User actions:**
- Enter phone number  
- Tap "Continue"  

**System actions:**
- Request OTP from Firebase  
- Navigate to OTP Verification  

---

### 1.2 OTP Verification Screen
**Purpose:** Validate OTP and sign in  
**User actions:**
- Enter OTP  
- Tap "Verify"  

**System actions:**
- Verify OTP with Firebase  
- Exchange Firebase token for backend JWT  
- If new user, navigate to Profile Setup  
- Otherwise, navigate to Home  

---

## 2. Profile Screens

### 2.1 Profile Setup
**Purpose:** Onboard first-time users  
**User actions:**
- Enter name  
- Add profile photo  
- Add bio  
- Save  

**System actions:**
- Upload photo to S3  
- Update user record in backend  
- Navigate to Home  

---

### 2.2 Edit Profile
**User actions:**
- Change name, photo, or bio  

**System actions:**
- Upload new photo if changed  
- Update backend  

---

## 3. Home Screens

### 3.1 Chat List (Recent Conversations)
**User actions:**
- Open a chat  
- Delete chat  
- Open settings  

**System actions:**
- Load recent conversations  
- Listen for WebSocket updates:  
  - new message  
  - delivery/read status  
  - presence updates  

---

### 3.2 User Directory
**User actions:**
- Search users  
- Start new conversation  

**System actions:**
- Fetch users  
- Create conversation if new  

---

## 4. Chat Screens

### 4.1 Conversation Screen
**User actions:**
- Send message  
- Scroll for pagination  
- See typing indicator  
- Delete message  
- View message status  

**System actions:**
- Connect WebSocket  
- Emit: message send, typing events  
- Receive: new message, delivered, seen, typing, presence  
- Paginate message history  

---

### 4.2 Chat Options
**User actions:**
- Block user  
- Report user  
- Clear chat  

**System actions:**
- Update block list  
- Submit report  
- Soft-delete messages  

---

## 5. Settings Screens

### 5.1 Settings Home
**User actions:**
- Edit profile  
- Change theme  
- View blocked users  
- Logout  

---

### 5.2 Blocked Users
**User actions:**
- Unblock user  

**System actions:**
- Update backend  

---

### 5.3 Theme Settings
**User actions:**
- Pick a theme color  

**System actions:**
- Apply theme locally  
- Save theme preference  

