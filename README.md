## What is iHateCEM

iHateCEM a game-changing solution for developers and non-developers alike. Are you tired of struggling with the complexity and cryptic nature of CEM animation formulae? Look no further! At iHateCEM, we've revolutionized the way you interact with regex by providing a user-friendly, intuitive interface that empowers you to perform intricate text pattern matching without the headache.iHateCEM ensures that you can effortlessly harness the power of optifine to make beautiful animation. Say goodbye to those moments of frustration and confusion. iHateCEM is here to simplify your animation experience and amplify your productivity.

#### TLDR
[iHateCEM](https://vidtdm.github.io/iHateCEM/) - a CEM animation cheat sheet

## Contribute Animations

Contribute to this project and make this the largest collection of animations!

### To contribute:

1. Fork this repository. You will need a Github Account

2. Add your animation to `data.json`

<details>
<summary>Show sample JSON</summary>

```json
    {
        "id": "bipedal-walking-animation",
        "title": "Bipedal Walking animation",
        "description": "Animation for walking for 2-legged(bipedal) entities",
        "usage-instructions": [
            "To turn head on its `x axis` we have to use the `head_pitch` variable; Which will look like this:",
            "```json",
            "\"head.rx\": \"torad(head_pitch)\"",
            "```",
            "We have to use the function `torad()` otherwise it will go berserk.",
            "Same for the `y axis` but instead `head_pitch` we have to use `head_yaw`; Which will look like this:",
            "```json",
            "\"head.ry\": \"torad(head_yaw\"",
            "```",
            "That's it!"
        ]
    },
```

</details>

<details>
<summary>Show JSON properties</summary>

| Property | Definition |
|------|------------|
|  id|  the short name of the animation. cannot contain spaces and only contain url-safe characters.|
|  title |  Title of the page. |
| description  | Silver line(s) under the title. |
| usage-instructions | Proper explaination of where to put which formula where. Written in arrays. |

</details>

3. Submit a pull request.


That's it! Wait for a dev to approve it.