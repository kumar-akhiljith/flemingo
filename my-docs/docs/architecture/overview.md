---
sidebar_position: 1
title: Architecture Overview
---

# Architecture Overview

Flemingo is a real-time, one-to-one messaging application built with a modular, scalable backend and a cross-platform mobile client. The architecture is intentionally simple in Phase 1, focusing on reliability, clarity, and horizontal scalability when needed.

## High-Level Structure

The system is composed of four main layers:

1. **Client (React Native + Expo)**  
   - Phone authentication (Firebase)  
   - Real-time messaging via WebSocket  
   - Push notifications  
   - Profile management  
   - Presence and typing indicators  

2. **Backend (Node.js)**  
   - Stateless REST API for authentication, profiles, reporting, and soft-delete  
   - WebSocket gateway for real-time messaging  
   - Redis for presence, typing state, and rate limiting  
   - AWS S3 for profile photos  

3. **Database Layer**  
   - MongoDB Atlas for durable message and user storage  
   - Indexed queries for message pagination and status updates  

4. **Infrastructure**  
   - Render for hosting  
   - Firebase for phone auth  
   - S3 for media storage  

## Core Principles

### Stateless Backend
Every backend instance behaves identically. All stateful information (presence, typing, rate limits) goes into Redis. This makes horizontal scaling trivial when traffic increases.

### Durable Messaging
Messages are stored in MongoDB with `writeConcern=majority`. No message is considered “sent” until persisted. This gives predictable behavior even under failures.

### Real-Time Communication
WebSocket is used for sending messages, updating delivery status, and broadcasting presence. The server also triggers push notifications when a user is offline.

### Extensibility
The message schema supports attachments by design, but attachments are not implemented in Phase 1. ML-driven emotional insight is planned for future phases and will plug into the existing pipeline without redesign.

## Data Flow Summary

### Messaging
1. Client sends message through WebSocket.  
2. Server validates auth and block rules.  
3. Message is stored in MongoDB.  
4. Server emits “message:sent” to the sender.  
5. Server emits “message:received” to the recipient.  
6. Push notification fires if the recipient is offline.

### Presence and Typing
- Presence: stored in Redis with TTL.  
- Typing: short-lived keys in Redis, broadcast to the conversation participants.

This high-level design supports a clean MVP and scales naturally as more features are introduced.
