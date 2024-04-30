---
title: AI Will Change UI Development
excerpt: I outline a possibility on how AI can dramatically change how we do frontend development
date: 2024-04-30
isDraft: true
---
---

Hello reader,

I want to make a prediction, or rather define a possibility: UI development will change. Dramatically.

## New Hardware & The App-less Ecosystem

When Humane AI delivered its eagerly anticipated and heavily publicized launch, it presented many distinctive features—though most were met with criticism. But, perhaps the most intriguing aspect to me was the lack of apps. The founders argued that because of AI, you don't need apps. Initially, I found this perplexing—wouldn't it be a very limiting experience without apps? What if developers outside the company wanted to build something for the device? How would they deliver it without an app platform? A few months later, Rabbit echoed similar sentiments at CES 2024 with its R1 device. Much of the criticism it faced was summed up by a common refrain: "Why is this not just an app on my phone?" This raises an even more interesting question: why are so many AI companies venturing into new hardware?

The answer: access to richer inputs. An AI that can tap into your location, the surrounding noises, voices, visuals, and more can offer significantly better guidance. While your phone contains many of these sensors, it often lacks real-time environmental context — the _ambience factor_ — as it usually remains in your pocket, requiring manual operation of its camera and microphone. This has spurred the development of **wearable computers** — be it necklaces, glasses, or even pins — designed to capture information seamlessly and effortlessly without user initiation.

The ability to capture a categorically larger variety of inputs (audio, vision, etc.) not only enhances an AI's capabilities but also allows it to display information in a more contextually specific way. Imagine you've been wearing a Humane AI pin for a few months while on a new diet and gym regimen. This device, having recorded all your meals and workouts, could let you ask for a display of your recent exercise data or even generate a graph showing your progress. What if you start struggling with motivation and need a gym buddy? Maybe the AI could generate profiles of others nearby for you to select a potential gym buddy.

This UI would not be hard-coded but dynamic, generated and rendered based on user queries. Consider how many traditional apps could be replaced if an AI had access to more data and could dynamically generate UIs. Hence, the app-less economy.

## Services vs UI-Centric Apps

There's an important distinction I'd like to draw concerning apps: there are those where the UI merely serves as a vehicle to deliver a service, and then there are those where the UI itself is the main attraction. Consider Spotify. We primarily use the app to listen to music, which is the service Spotify provides. Here, the UI is designed to facilitate access to this music, featuring functionalities like search, playlists, and recommendations. In contrast, take Instagram. The platform is highly visual; we use the app to view photos and videos, and interact with them through likes and comments. Here, the UI doesn't just support the service — it _is_ the service, as the visual and interactive elements are central to the user experience.

As we've discussed, AI could dynamically generate UI. It's conceivable that an AI could interface with Spotify's APIs to dynamically generate a user-specific UI. Imagine you're in a mall, and you hear a song you like playing in a store. You could ask your AI assistant to identify the song using a Shazam-like feature, add it to your library, and even generate a UI on your phone to show all your library songs while you're on the subway home.

Consider dating apps like Hinge or Tinder, where the service provided is the opportunity to meet people and the UI is just a vehicle. Imagine an AI that knows your music tastes, dietary habits, health information, favorite shows, and hobbies. You tell your AI assistant you're interested in dating, and it finds compatible individuals in your area, checks for mutual time availability, and even sends out a generated profile to those you're interested in.

For companies like Spotify and Tinder/Hinge, the shift towards AI integration would likely mean focusing less on front-end development and more on enhancing their back-end capabilities to support such AI interactions. What about Instagram? To adapt, apps that currently emphasize UI as the core of their experience would likely need to restructure themselves to become more service-oriented.

## What becomes of frontend

In a future where AI can dynamically generate UIs, one might wonder if frontend development will become obsolete, particularly in companies like Spotify or Tinder that focus more on backend processes. However, replacing human workers with AI in this area would be a grave mistake.

While AI can generate code, it often lacks innate creativity and may merely regurgitate existing human designs rather than produce genuine innovations. The evolving role of AI should transform, not replace, frontend development practices. AI might produce generic interfaces on its own, but these limitations can be addressed with the creative input of frontend developers.

Developers could focus on creating a UI library for their apps—designing versatile, reusable components that AI systems can dynamically deploy by stitching components together. This "Lego piece development" approach allows developers to assemble UI elements, guided by AI's efficiency but enhanced by human creativity and insight.

UI could be transmitted alongside backend API calls, a concept not new in web development. Frameworks like Rails and Laravel already facilitate the sending of HTML partials from the server to the client. React Server Components introduce a similar paradigm, but with a focus on modern, interactive web applications. This architecture allows for UI components to be dynamically adjusted in real-time. By integrating machine learning frameworks directly on the web server, the system can adapt the UI based on ongoing analysis of user data and interactions.

Frontend development might increasingly focus on the infrastructure that enables AI agents to generate UIs for end users. An example of this today is [explorer.globe.engineer](https://explorer.globe.engineer), a platform allowing users to query information and receive a dynamically generated, wiki-like UI. While its UI structure is consistent, with only the content changing, we can envision an AI capable of manipulating more elements to tailor the user experience further.

Frontend developers might need to specialize in UX design principles, understand user behavior, and master interactive design to create templates that AI can dynamically populate. Skills in data visualization could become increasingly important, as presenting information in an instantly comprehensible and engaging way is crucial.

Backend developers might shift their focus toward developing sophisticated APIs that handle data transactions and include rich metadata providing contextual descriptions of the data. For example, a music streaming service's API might describe the mood, tempo, and suitable activities (like workout or relaxation) for each track, enabling AI to create intuitive situational playlists. This extends to app-to-app communication, such as how Tinder displays a user's Spotify listening activity or Instagram posts. As AI begins to generate UIs, developers must ensure their APIs and data are well-documented contextually, allowing AI to appropriately integrate and display information from different apps.

## Conclusion

As we look towards a future reshaped by AI, the landscape of UI development is poised for profound transformation. The advent of AI-driven interfaces promises not only a shift from traditional apps to more dynamic, context-aware systems but also redefines the roles of frontend and backend developers. By embracing AI's capabilities to dynamically generate user interfaces, companies can leverage richer inputs and more personalized interactions, leading to an app-less economy where the boundary between service and interface blurs. But remember, this is less a prediction and more me defining a possibility.
