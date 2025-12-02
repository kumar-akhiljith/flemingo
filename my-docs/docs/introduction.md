---
sidebar_position: 1
title: Introduction
---

# Introduction

Flemingo is a cross-platform messaging app built with React Native. The goal is to provide a fast, secure, and reliable one-to-one chat experience on both iOS and Android, with a backend designed for scalability and clean separation of responsibilities.  
The early phase of the project focuses on fundamentals: stable real-time messaging, message persistence, phone number authentication, presence indicators, delivery status, blocking, reporting, and push notifications.

## Motivation

Most chat apps only display text with no emotional context. Misunderstandings happen, tone gets lost, and conversations become harder than they need to be. Flemingo aims to address this by eventually introducing consent-based emotional insight.

The long-term vision includes optional machine learning models that can detect sentiment in messages and surface emotional cues to the other participant. This feature is strictly opt-in for both users. If either person disables it, the feature remains inactive.  
The objective is to add clarity, never surveillance, and to do it in a way that respects privacy and user control.

## Phase 1 Goals

Phase 1 is a minimal but production-ready version of the app. It includes:

- Phone number login using Firebase  
- Basic profiles (name, photo, bio)  
- One-to-one messaging with real-time updates  
- WebSocket delivery with message persistence  
- Delivery and read status  
- Typing and presence indicators  
- Push notifications for offline users  
- Block and report functionality  
- Rate limiting for login and messaging  
- Soft delete for messages  
- A backend designed for clean extensibility  

This phase does **not** include any ML features. The goal is to ship a stable MVP that can be deployed to the Play Store.

## Long-Term Vision

As the architecture matures, Flemingo will expand into:

- Optional emotional-tone detection using ML  
- Structured analytics for sentiment trends  
- User-controlled visibility rules for emotional insights  
- More advanced real-time features like reactions, attachments, and multi-device sync  

These additions depend on having a solid, maintainable foundation, which Phase 1 establishes.

## Who This Documentation Is For

This documentation serves:

- Contributors building features or reviewing architecture  
- Developers integrating with or extending the backend  
- Anyone trying to understand the motivation, direction, and engineering choices behind Flemingo  

If you're contributing to the project, start by reviewing the architecture overview and the Phase 1 specification.

