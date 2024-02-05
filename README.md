# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

```
triplea
├─ .eslintignore
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ header-navbar
│  │     │  ├─ homepage
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ main
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ bf14e5e729d5badef9453e0fcfc30cb7ad6ee2
│  │  ├─ 02
│  │  │  └─ 104b4a6012215ae7349bb434addd637b27d899
│  │  ├─ 03
│  │  │  └─ 5188075cb115dccaca687c3a7dfa2923111f4f
│  │  ├─ 04
│  │  │  ├─ 5621b0a8e27e14193d6a2e898ae9bc6a9025c7
│  │  │  └─ 8ae145714470b1d515cfac5d3f294b776293ee
│  │  ├─ 07
│  │  │  └─ b8e1dc44ad1cf57e31c43f1a20646bc5342718
│  │  ├─ 0a
│  │  │  └─ 6be51050522ba0274abec1484c31937c25d833
│  │  ├─ 0c
│  │  │  ├─ b5b47c3e7e10139d5fe09b57a410c0dea1397c
│  │  │  └─ d51c43b8e92df840a8c617963fe4a1a5f11145
│  │  ├─ 0d
│  │  │  └─ c5d61c14510d6b3cdce2cf675c03ad4d5c6a93
│  │  ├─ 0e
│  │  │  ├─ 3dacf4225466008776db0661e2fb5cdbf90d86
│  │  │  ├─ 8fa5d17d24ca1d5530183356183cd6c9395060
│  │  │  └─ a5574d1fddf2b8bb012c0668e34314d1e7583a
│  │  ├─ 0f
│  │  │  └─ 013548aa1284957c7379ac21d2424719eef1c4
│  │  ├─ 11
│  │  │  └─ 43e9dadc75d95f8512a373793f8ff713242371
│  │  ├─ 15
│  │  │  └─ fbc055343800c461a7a3bad3b823b51bff91b3
│  │  ├─ 16
│  │  │  └─ 3d3a8a72f847298f303f52bce09396b8f54ea9
│  │  ├─ 17
│  │  │  └─ c73f0d57a3d25286980c0849c40328096628b4
│  │  ├─ 18
│  │  │  ├─ 4d18f8b64110384bc4ff4e0cef379a2684c395
│  │  │  └─ 63a95e11d77de0070aa2e4256e857d41341497
│  │  ├─ 19
│  │  │  └─ ea8b47b0f1f857fe94f6266d01c0e277e11122
│  │  ├─ 1a
│  │  │  ├─ 4deacb8a899887c4585f898320dec491295055
│  │  │  ├─ 56b5f86854e381a8e11f7530105207026ffb7f
│  │  │  └─ 5ec0faef01b351d91c46a397bda9aac0b21d60
│  │  ├─ 1c
│  │  │  └─ 392dddc0c806e1dd152f946fddbe680fd91a2c
│  │  ├─ 1d
│  │  │  └─ 2b4c022e8ebed5efcafbfe45d5214e2d34b740
│  │  ├─ 1e
│  │  │  └─ ce8b225d80edf8abf16620935766b4082aca86
│  │  ├─ 1f
│  │  │  └─ 43f5b9d3768402d1ffdb4492178d61aa642ebc
│  │  ├─ 20
│  │  │  └─ bed125c6ad826fbaa980167724e1ad2bfb0863
│  │  ├─ 21
│  │  │  ├─ 3444aab44ebfd4da67713cde0e05e8c03ed81a
│  │  │  └─ 9aaae0ada35a6537643de393ea6b0135f46d8a
│  │  ├─ 22
│  │  │  └─ 83f4698b029eba1ac84fefe3d20ecedf4fd866
│  │  ├─ 27
│  │  │  ├─ 229ed5f7be33361722a8ed7efb7b357bed6381
│  │  │  └─ 96f51acef6342a10656769a4e8f2502d00bdf0
│  │  ├─ 28
│  │  │  ├─ 58e28742a756274a8122178ba3cfb49df1b5a4
│  │  │  └─ 74bd6aa03ce86671ef3d2293653acb6b0138c2
│  │  ├─ 2a
│  │  │  └─ 5d0464478cef259568f649fe2902dc332c7b15
│  │  ├─ 2e
│  │  │  ├─ 464d116c2c7f9a659841c02fd64357fb4f63f6
│  │  │  ├─ 9fdb6cddd18c7cbd17aabdbe2908c47f4cb101
│  │  │  └─ b9332de8947b4bbc89b11c755bce7a7013af20
│  │  ├─ 2f
│  │  │  └─ f6478c4ac4f7c64501f7818ceb38bc1f13b9e4
│  │  ├─ 30
│  │  │  ├─ 1e785eb88c65d0ddcd7e812dc50ca4a243d60d
│  │  │  ├─ 76897bb506662c5994ea7b20d410171b446aca
│  │  │  ├─ e1d444cd1517b17ac865f7bebe4fcc5ed320fa
│  │  │  └─ febd0dd32cd62474ad3bf551e3aeb7cdf47137
│  │  ├─ 31
│  │  │  └─ 95ec6793321b7a01038b06a1faafe353b442c9
│  │  ├─ 32
│  │  │  └─ c80698c4c8b6ea0e03c878a77a051e800112bb
│  │  ├─ 34
│  │  │  └─ ab21fe1eb910a161db63788156503ed0dc61ea
│  │  ├─ 35
│  │  │  └─ 09f53e523f14f6723e75a9cc1afa86723e97b0
│  │  ├─ 38
│  │  │  ├─ 07787cbd63f30e7bfb74cab6686209f0da00b4
│  │  │  └─ 972655faff07d2cc0383044bbf9f43b22c2248
│  │  ├─ 39
│  │  │  ├─ b8e37853c321f9686279a0160e516166fdd83f
│  │  │  ├─ d3256bebbd5563960093c81f6dc6acdcd1810b
│  │  │  └─ d544b3806879ec47c489c25a9b7868f7795a55
│  │  ├─ 3a
│  │  │  └─ 3b9e6a29b2aea3dedc468677749c18d0f6302f
│  │  ├─ 3e
│  │  │  ├─ 35f3e876267e62a799cd0d4d3abdcbf431de77
│  │  │  └─ c7443f14d2e2d3a4f082afc8d19031a3f8ad78
│  │  ├─ 40
│  │  │  ├─ 7844ad1594cf8795cf53bcec2ecff7ce184509
│  │  │  └─ b6bdfcc8b9314ea072f834aa6d53da36041025
│  │  ├─ 41
│  │  │  └─ 94a6c04ef46326f2248e9a492e5c216e76fd96
│  │  ├─ 43
│  │  │  └─ 763bb14ad0d47b1a6d0df58f1e782e1547d351
│  │  ├─ 44
│  │  │  ├─ 6ab9db5fb456c6f2014a232ab7145e0e19f408
│  │  │  └─ b263acc675d2bc5a1c3d64e506672abe715a20
│  │  ├─ 45
│  │  │  ├─ aaeff04101b33241c732ecb39b15bebc0970e5
│  │  │  ├─ bb1999a2df2a16a02821945863beee84e0ae57
│  │  │  └─ dfd4471a7eda949cb9f4ade7fc621533f9a355
│  │  ├─ 46
│  │  │  └─ 11ce8b08e70d220c815a579c9b987a591a8ae1
│  │  ├─ 47
│  │  │  └─ 417beb32ac0132cf1bf2c98f8c16a8f00c1ef6
│  │  ├─ 48
│  │  │  └─ 25a371ddd456e72385bb1a2d947a80d61fcef8
│  │  ├─ 49
│  │  │  ├─ 138f14c522822ec2d24af67199cc492d8b31ae
│  │  │  ├─ 20a39cce1706b5578a82130946c08eab1a87e9
│  │  │  ├─ 4a31ba84973bab86b8635516704ac4dacda0af
│  │  │  └─ a1dce64926632d645aa51c67dd16b7aaedab8a
│  │  ├─ 4a
│  │  │  ├─ 957672da747993848abbac2b8ebbddb0ed9a2a
│  │  │  └─ d5a06fde2dfc531772edabfc00f8c05049caa2
│  │  ├─ 4b
│  │  │  └─ f6c7776f76459155ed13c768765386425d2af5
│  │  ├─ 4c
│  │  │  ├─ 2bfc45659d7a3c5ab91c4fcc2a905a57e2f298
│  │  │  ├─ 95743808e7368ae2aee43cc394c1680c3e36ec
│  │  │  └─ d75136786714b0a369e982eb7a747cb91660e9
│  │  ├─ 4d
│  │  │  ├─ d4dde541585878e2aa1e667c7ba901ea907adb
│  │  │  └─ f80b505c084b90c41cc718bd527843d59ebc58
│  │  ├─ 4e
│  │  │  ├─ 579377eed92f6ee6c63b5595f38742705fd02e
│  │  │  └─ 7a450134b8fb4bd2d1d4ddea8e1fc915477442
│  │  ├─ 4f
│  │  │  └─ 9c4035508653ca992dbe8e1c7ddb3b7f7ebc79
│  │  ├─ 50
│  │  │  └─ 4152ac649d9dbd84ae702f32e2fba82c9459ce
│  │  ├─ 51
│  │  │  ├─ 0ee0d0c1470f2c2d39e28f2c32c829450d8902
│  │  │  ├─ 106ce8a7b3cc1bcc4cd03bfda49970adac0626
│  │  │  └─ 2c9b37289505573523f57bfefeb1b617d141ab
│  │  ├─ 52
│  │  │  └─ 7f0effdb80ff9e4c8f57163b464cb00958bd05
│  │  ├─ 53
│  │  │  └─ 0f1fdfb82e1668acdcefd1cdcdbaeb99fca48e
│  │  ├─ 55
│  │  │  └─ 1e1b4098c63164a635586a020b5d6e92cc96ab
│  │  ├─ 56
│  │  │  └─ 10fa0a88c5e8d3e1ebb6a877189719571ecfc4
│  │  ├─ 57
│  │  │  └─ 672bcc7d87ed5c74c30da27875df11cc78fa30
│  │  ├─ 58
│  │  │  ├─ 8e7d8a72ba7a92ae8d5e85a357b6f87a46e7ea
│  │  │  └─ c08785e2fae379c3d034585af2a439663f9a7e
│  │  ├─ 59
│  │  │  └─ 82b0ae37dddc9f0a4528bcb91aefdfa249fbd9
│  │  ├─ 5c
│  │  │  └─ 91169b0ca6508bb24301c957a9edea5abf2b01
│  │  ├─ 5e
│  │  │  └─ 5b13b0ec15599f0338a1a212dbaee1b8413ac5
│  │  ├─ 5f
│  │  │  ├─ 18d361248453ab379d40c19abb436094bf0052
│  │  │  └─ a7542b07d345298973ba8b902deedf876f9cef
│  │  ├─ 60
│  │  │  └─ 154403899e1b45305c240707b3d84c4a0026f1
│  │  ├─ 61
│  │  │  └─ 9beecb15d09965c2c2df6d16e66622bab02c75
│  │  ├─ 63
│  │  │  ├─ 765bd9c1e17d7a07ba596ebb48f6a98dddcf3d
│  │  │  └─ 8fb57345314daa5c3ce81ba411322b6b7bdc89
│  │  ├─ 64
│  │  │  ├─ 563c3c27d37d01ae7d84ae01a9a7e96e5b8453
│  │  │  └─ fd449c94615c2f5abd50a286fa4272f54a3fed
│  │  ├─ 65
│  │  │  ├─ 2979fb41bc050f44ca66d2494bd4e1aabf7b0b
│  │  │  ├─ 5d439aba291eb23840281c5b4e39918cd94b87
│  │  │  └─ 83c4655b7b8d687e0b5cb3c89a45fe5b59ed85
│  │  ├─ 66
│  │  │  └─ 35cf5542756197081eedaa1ec3a7c2c5a0b537
│  │  ├─ 67
│  │  │  └─ 83878c8a70f87fa72a1a721a407b30f9202c05
│  │  ├─ 69
│  │  │  └─ 77660590b2914330fe0bc4fccd1a7842b9a174
│  │  ├─ 6a
│  │  │  ├─ 1300a6b09a49bdd8bff80e7e619556d30cd777
│  │  │  ├─ 8e6eea20807a25ce9554608e7e1fbbf5de586c
│  │  │  └─ 9fa986b50dc14ecb895ec87214029a6a017b9f
│  │  ├─ 6b
│  │  │  ├─ 5823b2b7f2a49b44807e5a576b5c0ea422ae35
│  │  │  ├─ 58c4f1ad8c057ddf1f0ddeaa0c8a96b7140892
│  │  │  ├─ 73f462821f630cc28dda166ec698740b0b63f4
│  │  │  └─ 98f8c918cef3328e50cc93a5201f6fb76110c4
│  │  ├─ 6e
│  │  │  └─ 1c9e479711682ff9500b2ba9531f966e8ea129
│  │  ├─ 6f
│  │  │  ├─ 4d9c7877d340230a6e3b3cab5a115fefa85e72
│  │  │  └─ b4c1ba053ccb378b4ca2eb7a6c292116355c9f
│  │  ├─ 70
│  │  │  ├─ 0b389a600bbe5e4db9822160cbc17a942a0fce
│  │  │  └─ 2d03c01b5b8372add2bc24612227a86809f4e7
│  │  ├─ 71
│  │  │  └─ b2350afe017f48f1b26cde3642420f608e97cc
│  │  ├─ 72
│  │  │  ├─ b32b4d122e17920e389fc41c0e5104f59f42d1
│  │  │  └─ d5a0c07fb89bc5ce54b12884769e03aba00c34
│  │  ├─ 73
│  │  │  ├─ 4642240d92e3235e47cd563d1d2da151102fb4
│  │  │  └─ 4d13a925527bf7456b750f6b8b67a33435fd8f
│  │  ├─ 74
│  │  │  └─ 95ab2033f717f2000aa8b9582a573c9a0531b2
│  │  ├─ 75
│  │  │  └─ a48159a00ef4162e8f4718c3ff27ff2a6b29b3
│  │  ├─ 76
│  │  │  └─ 82b0d50309ae43b647d5588c5c9f82ca6f3604
│  │  ├─ 77
│  │  │  └─ 468189597fbdedb87025f2c3cdb48bc9bfabd1
│  │  ├─ 7a
│  │  │  ├─ 60ecbb4995cf5b366073667168de89f43aa1a3
│  │  │  ├─ 68f3ee7e504c9aa52a9719c1aaaf78f663c39a
│  │  │  └─ dc6e15db688c09f5b418512692c4a2b3f6173a
│  │  ├─ 80
│  │  │  ├─ 969823bfc9aa4f9541fbff4584f2c1f8f45279
│  │  │  └─ ca920b206c8bb6f221d408158894a4551ce57d
│  │  ├─ 81
│  │  │  ├─ a8da3840e400761097399789c5d9c317571faa
│  │  │  └─ af439e55bd68ba4d1af7c4de160039b16bcc1b
│  │  ├─ 82
│  │  │  └─ 5b9e65af7c104cfb07089bb28659393b4f2097
│  │  ├─ 88
│  │  │  └─ c68564e8f723dde1cf9c7c808440466c987adb
│  │  ├─ 89
│  │  │  ├─ 18294073455398368f1c4f5d3949c4e4f7edfc
│  │  │  └─ 9bd76f160a3f6bbd7ae64c39d0acdfb5287cc5
│  │  ├─ 8b
│  │  │  ├─ 3bc61241f76a136f07113fa52f73f6821aedf8
│  │  │  └─ 746933be23646fb6340ad7200a26942acc325e
│  │  ├─ 8c
│  │  │  ├─ 14c92bfbf247afa1747d8e36533feb8db30dc6
│  │  │  └─ a5134b7f89b2793a169566ed98572b66ffa156
│  │  ├─ 8f
│  │  │  └─ 2df1a9febf89a9340e1beffc15f24269ab0934
│  │  ├─ 90
│  │  │  ├─ 83497c144e01625ca4d03c93b3576943c04fc1
│  │  │  ├─ d21efd39e2b6c60aad9a1e056db3bb0a8093cb
│  │  │  └─ ff136d9e052d46eeb7dbfb853a93fe9f64900a
│  │  ├─ 93
│  │  │  └─ cf5d07c81286f9d502a152cea1e421691c7e7d
│  │  ├─ 94
│  │  │  ├─ 435422e5c143540f307051fbca4aa74dc33e98
│  │  │  └─ 68b79d3afdf0b042aaef3350387a0c4b5a895e
│  │  ├─ 95
│  │  │  ├─ 306d71fcc1142db0e5a2a8e793011f4a4515f7
│  │  │  └─ 520aa13bdc63207eefd518b991c115e96f1a37
│  │  ├─ 97
│  │  │  └─ b717201fa2110214ff9376ab035dabf0f25674
│  │  ├─ 98
│  │  │  └─ b315a8aa4b4c35e4f0a0ff162314daad76521d
│  │  ├─ 9a
│  │  │  └─ 90aa055c3c833aebc8c9fadaf2c18664069507
│  │  ├─ 9b
│  │  │  └─ 5331e49b948b078de767e1afd4eda874c55d80
│  │  ├─ 9e
│  │  │  └─ f55ae256e04dd7a62f6bcbde5987a1c210ac78
│  │  ├─ 9f
│  │  │  └─ 73feed4b852ceeb893d5be160a75ef55e30c62
│  │  ├─ a0
│  │  │  ├─ c4acd65c9719b469dd789b272d7b10e575ffbe
│  │  │  └─ fd7f7ca91f216e95d89fed3fae1c4f0851f5e0
│  │  ├─ a1
│  │  │  └─ 914febbd01cef18c557a905b7462b5739b96ef
│  │  ├─ a2
│  │  │  ├─ 222cfbeaf436b38350d801380b5a9db1c6608b
│  │  │  └─ 51e5777e1a9672f82b255bf9904e6f31de5ed3
│  │  ├─ a5
│  │  │  └─ ecd4678b1153e2a33abeb5ee403ee0e67457f2
│  │  ├─ a7
│  │  │  └─ 7fddea90975988d17a7e8b2f61720939a947f5
│  │  ├─ a8
│  │  │  └─ 557aa3aa24d52e9f1c383990971f75ff50e2f1
│  │  ├─ ac
│  │  │  └─ 723b5402b2505c459a9b18d8e35d20cbd98a43
│  │  ├─ ad
│  │  │  └─ 3f576cd24230f90c26b76ad542597fdae9ef7c
│  │  ├─ ae
│  │  │  └─ 9fd37ca47c21047525f736555c6dd116c6545c
│  │  ├─ af
│  │  │  ├─ 402a4a486b6e16876a9d8aac5729c633013590
│  │  │  └─ b13ef7fdea7774cdcd27130e8cb266e8e44c54
│  │  ├─ b2
│  │  │  ├─ 2922e87b6ada314746f1184ab4bf45a6d78b6a
│  │  │  └─ 9ec935de019971d89361a462099ea46ef5e232
│  │  ├─ b5
│  │  │  └─ ddaa476a82e00df606438dcf9e4d21af5b58bc
│  │  ├─ b6
│  │  │  └─ f27f135954640c8cc5bfd7b8c9922ca6eb2aad
│  │  ├─ b9
│  │  │  ├─ 06e9d031b881fc4aa337b3b78f921dc08ee4fc
│  │  │  └─ c116f39a7c3ebfcce2a7299ba64edd016e778c
│  │  ├─ bb
│  │  │  └─ c08630eb505b92baa4a9ed6398384d364ea4b6
│  │  ├─ bc
│  │  │  └─ e83bbfa8a4d4188158335d18de2f4411443ea6
│  │  ├─ c0
│  │  │  └─ 3d46b41ffb19cafd7b4953e232bfcdba05f8fd
│  │  ├─ c1
│  │  │  ├─ 5e0f40e6ef7771e43ad2cdf6db374827242177
│  │  │  └─ cb626db33a926275aef9bee9e9fbb77123ddfe
│  │  ├─ c4
│  │  │  └─ 2828a5623c40400163ff359c2ac977ddfa127a
│  │  ├─ c5
│  │  │  └─ 6a356e63a2e10bb3478f6c7049c0a9c5f62e78
│  │  ├─ c6
│  │  │  ├─ 2066075589c1a1b3467225f3c8c0902718e7f3
│  │  │  ├─ 52aa4d213be86a74799dd92de10e3763ab8d4e
│  │  │  └─ 9b49ab446dfe781277595bacbc8774ee7dfefb
│  │  ├─ c7
│  │  │  └─ 57e1e678acaeac4ad6e629a87364d6fc39569a
│  │  ├─ c8
│  │  │  ├─ 7f0950ad49532918cedc098a44da710c8808f3
│  │  │  └─ da6a727e73c5d46b100cbcb4904824ca8bede9
│  │  ├─ c9
│  │  │  ├─ ba95257edffbdfdcd046788aec54b29163e2f2
│  │  │  ├─ e1aaa11a50db4aa385d034ea12bac333bb7a0a
│  │  │  └─ e9d952eb2e1c40f03395da4bbea3ab5a9e6503
│  │  ├─ ca
│  │  │  └─ 37b8c1b3041086cf3818a2f6ad96043fdc5dc0
│  │  ├─ cd
│  │  │  └─ cbc25315532d66c9f6c7293712a6ca6c0d0cf9
│  │  ├─ ce
│  │  │  ├─ 9755f338d2642f8d0bd6cece3859ad53f5ef68
│  │  │  ├─ ce19420249a277c24d6d9b6e41726acc328822
│  │  │  ├─ cf0888923aacad86e068cf501590c963176a7c
│  │  │  └─ ff08e05a1ceadb0bd822758233253e0d4870ec
│  │  ├─ d2
│  │  │  └─ 5dd8f777460f0529d5ff229ff7586772b0f2ea
│  │  ├─ d8
│  │  │  └─ ab1e66261528c23f8c666d02b6bcea019ad0fc
│  │  ├─ d9
│  │  │  ├─ 554f3d18a3a530a601af53c012e9a6f453530b
│  │  │  └─ f65a1e54cc3af03c174f49a20a29c9b78b1769
│  │  ├─ da
│  │  │  └─ 47218af1bca07e9bcf3b5f4bd56dcb49608609
│  │  ├─ dc
│  │  │  ├─ 38f4ebffa7ac8d17b0b5bbb8bb1ebb9857b7ab
│  │  │  ├─ 7b62eaf654939ff7831e3c66b862cb306baa91
│  │  │  └─ e35f2d091f6137980199dbf2bb3818a8498047
│  │  ├─ e0
│  │  │  └─ 7cbbd72507c5193af2ad4f3511d5de4bee7f81
│  │  ├─ e1
│  │  │  └─ 736ead6c46abaaa72fad63cf68f34318d8300d
│  │  ├─ e2
│  │  │  ├─ 794df5a86e99150079804397a3d9212fcefef0
│  │  │  └─ 842a555d38b92e7197d7bbbe709dba32e43a8e
│  │  ├─ e3
│  │  │  └─ 23eeda657d09970c034554a7d70119d0521884
│  │  ├─ e4
│  │  │  └─ 42fb4d55ec216e97bb2fda27a27e2b197ee023
│  │  ├─ e5
│  │  │  └─ c478a455d5ea0983c98be549fb31d6fe897b53
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  └─ 0066324def8c1cb39b23ef059558de9a39b492
│  │  ├─ ec
│  │  │  ├─ 432d4857cb30fbd503281989ba4cf17705cdaf
│  │  │  └─ 9e6a5e70ff92101bcb7995141e89062af0f84e
│  │  ├─ ed
│  │  │  └─ ba7de37a7e9f7addbef16baf283aa92f58b944
│  │  ├─ ee
│  │  │  └─ 449b0db0b53733879bb979b2ee61b2be6bffd5
│  │  ├─ ef
│  │  │  └─ fe0d0d266c6d908a42d8f3be199165d03fb6e4
│  │  ├─ f0
│  │  │  ├─ 6e1a19f0360d2139174c74d054851815becade
│  │  │  └─ ba5d26b75572110c639529490fbe3ed5015efb
│  │  ├─ f1
│  │  │  ├─ 27b70d79fec86f707371e4397014b9ac1516a0
│  │  │  ├─ 86041cbca02a54e82e36a92826bfa6eea40d5e
│  │  │  └─ ef117262f77e4045aab2fd0698e1fd16aed087
│  │  ├─ f2
│  │  │  └─ 4afb77ec6391edd30a59a9973e03fbb0ba8615
│  │  ├─ f3
│  │  │  └─ 5902c4d4fd16d8b339ec4809f5d1480f72e714
│  │  ├─ f4
│  │  │  ├─ d95e47a3b838387771fc22a0011f5fe1e8e644
│  │  │  └─ ecae574267049d40cce4a5adf33bf9cb37c72f
│  │  ├─ f8
│  │  │  ├─ 2292f67c8d2891dedfa2d382858f0730a90af2
│  │  │  └─ de1af0912e7ddad44cfab1c890afd49b69c616
│  │  ├─ fa
│  │  │  ├─ 939559e810669415ef4cabde708f0e838f7912
│  │  │  ├─ b32bfc98bb59f303314de51442d26870600ba8
│  │  │  ├─ ebc87dfdd1c87f0a4ed6e07126182182009454
│  │  │  └─ ee693c62bd0fe52cbd56beaff52bdc0d67ae0b
│  │  ├─ fb
│  │  │  └─ 92b4d872cb74b87a99b254264ee3dc827088e4
│  │  ├─ fc
│  │  │  └─ dd46f02d4fb67d44345591ff9669a0777a742f
│  │  ├─ fd
│  │  │  └─ 7f476262703b15356371322400764a5013562f
│  │  ├─ fe
│  │  │  └─ d21688f05b9f5c1a8de2fefcc9463d1d86443e
│  │  ├─ ff
│  │  │  └─ 67f77a196cccf9c4b4ab78178a851ed898ba58
│  │  ├─ info
│  │  └─ pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ header-navbar
│     │  ├─ homepage
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .npmrc
├─ .prettierignore
├─ .prettierrc
├─ .svelte-kit
│  ├─ adapter-node
│  │  ├─ .vite
│  │  │  └─ manifest.json
│  │  ├─ _app
│  │  │  └─ immutable
│  │  │     └─ assets
│  │  │        └─ _page.110b14f7.css
│  │  ├─ chunks
│  │  │  ├─ index.js
│  │  │  └─ internal.js
│  │  ├─ entries
│  │  │  ├─ fallbacks
│  │  │  │  ├─ error.svelte.js
│  │  │  │  └─ layout.svelte.js
│  │  │  └─ pages
│  │  │     ├─ _page.svelte.js
│  │  │     └─ about
│  │  │        └─ _page.svelte.js
│  │  ├─ index.js
│  │  ├─ internal.js
│  │  ├─ manifest-full.js
│  │  ├─ manifest.js
│  │  └─ nodes
│  │     ├─ 0.js
│  │     ├─ 1.js
│  │     ├─ 2.js
│  │     └─ 3.js
│  ├─ ambient.d.ts
│  ├─ generated
│  │  ├─ client
│  │  │  ├─ app.js
│  │  │  ├─ matchers.js
│  │  │  └─ nodes
│  │  │     ├─ 0.js
│  │  │     ├─ 1.js
│  │  │     ├─ 2.js
│  │  │     └─ 3.js
│  │  ├─ client-optimized
│  │  │  ├─ app.js
│  │  │  ├─ matchers.js
│  │  │  └─ nodes
│  │  │     ├─ 0.js
│  │  │     ├─ 1.js
│  │  │     ├─ 2.js
│  │  │     └─ 3.js
│  │  ├─ root.svelte
│  │  └─ server
│  │     └─ internal.js
│  ├─ output
│  │  ├─ client
│  │  │  ├─ .vite
│  │  │  │  └─ manifest.json
│  │  │  ├─ _app
│  │  │  │  ├─ immutable
│  │  │  │  │  ├─ assets
│  │  │  │  │  │  ├─ 2.9704d06c.css
│  │  │  │  │  │  └─ _page.110b14f7.css
│  │  │  │  │  ├─ chunks
│  │  │  │  │  │  ├─ index.e8cdc81c.js
│  │  │  │  │  │  └─ singletons.9a1776f8.js
│  │  │  │  │  ├─ entry
│  │  │  │  │  │  ├─ app.e5643ac4.js
│  │  │  │  │  │  └─ start.fb41fc02.js
│  │  │  │  │  └─ nodes
│  │  │  │  │     ├─ 0.55ca0681.js
│  │  │  │  │     ├─ 1.e77e6314.js
│  │  │  │  │     ├─ 2.abbf6080.js
│  │  │  │  │     └─ 3.4ba0f7f5.js
│  │  │  │  └─ version.json
│  │  │  ├─ admin
│  │  │  │  ├─ config.yml
│  │  │  │  └─ index.html
│  │  │  ├─ favicon.png
│  │  │  ├─ homepage-cryptopayments.mp4
│  │  │  ├─ homepage-cryptopayouts.mp4
│  │  │  ├─ homepage-ecommerce-p&p.mp4
│  │  │  ├─ homepage-ecommerce-payments.mp4
│  │  │  ├─ homepage-ecommerce-payouts.mp4
│  │  │  ├─ homepage-luxury-p&p.mp4
│  │  │  ├─ homepage-luxury-payments.mp4
│  │  │  ├─ homepage-luxury-payouts.mp4
│  │  │  ├─ homepage-marketplace-p&p.mp4
│  │  │  ├─ homepage-marketplace-payments.mp4
│  │  │  ├─ homepage-marketplace-payouts.mp4
│  │  │  ├─ homepage-top.mp4
│  │  │  ├─ logo.svg
│  │  │  ├─ payments-page-top.mp4
│  │  │  ├─ payouts-page-top.mp4
│  │  │  └─ uploads
│  │  │     └─ nathan-dumlao-5hl5reicevy-unsplash.jpg
│  │  └─ server
│  │     ├─ .vite
│  │     │  └─ manifest.json
│  │     ├─ _app
│  │     │  └─ immutable
│  │     │     └─ assets
│  │     │        └─ _page.110b14f7.css
│  │     ├─ chunks
│  │     │  ├─ index.js
│  │     │  └─ internal.js
│  │     ├─ entries
│  │     │  ├─ fallbacks
│  │     │  │  ├─ error.svelte.js
│  │     │  │  └─ layout.svelte.js
│  │     │  └─ pages
│  │     │     ├─ _page.svelte.js
│  │     │     └─ about
│  │     │        └─ _page.svelte.js
│  │     ├─ index.js
│  │     ├─ internal.js
│  │     ├─ manifest-full.js
│  │     ├─ manifest.js
│  │     ├─ nodes
│  │     │  ├─ 0.js
│  │     │  ├─ 1.js
│  │     │  ├─ 2.js
│  │     │  └─ 3.js
│  │     └─ stylesheets
│  └─ tsconfig.json
├─ README.md
├─ build
│  ├─ client
│  │  ├─ _app
│  │  │  ├─ immutable
│  │  │  │  ├─ assets
│  │  │  │  │  ├─ 2.9704d06c.css
│  │  │  │  │  └─ _page.110b14f7.css
│  │  │  │  ├─ chunks
│  │  │  │  │  ├─ index.e8cdc81c.js
│  │  │  │  │  └─ singletons.9a1776f8.js
│  │  │  │  ├─ entry
│  │  │  │  │  ├─ app.e5643ac4.js
│  │  │  │  │  └─ start.fb41fc02.js
│  │  │  │  └─ nodes
│  │  │  │     ├─ 0.55ca0681.js
│  │  │  │     ├─ 1.e77e6314.js
│  │  │  │     ├─ 2.abbf6080.js
│  │  │  │     └─ 3.4ba0f7f5.js
│  │  │  └─ version.json
│  │  ├─ admin
│  │  │  ├─ config.yml
│  │  │  └─ index.html
│  │  ├─ favicon.png
│  │  ├─ homepage-cryptopayments.mp4
│  │  ├─ homepage-cryptopayouts.mp4
│  │  ├─ homepage-ecommerce-p&p.mp4
│  │  ├─ homepage-ecommerce-payments.mp4
│  │  ├─ homepage-ecommerce-payouts.mp4
│  │  ├─ homepage-luxury-p&p.mp4
│  │  ├─ homepage-luxury-payments.mp4
│  │  ├─ homepage-luxury-payouts.mp4
│  │  ├─ homepage-marketplace-p&p.mp4
│  │  ├─ homepage-marketplace-payments.mp4
│  │  ├─ homepage-marketplace-payouts.mp4
│  │  ├─ homepage-top.mp4
│  │  ├─ logo.svg
│  │  ├─ payments-page-top.mp4
│  │  ├─ payouts-page-top.mp4
│  │  └─ uploads
│  │     └─ nathan-dumlao-5hl5reicevy-unsplash.jpg
│  ├─ env.js
│  ├─ handler.js
│  ├─ index.js
│  ├─ server
│  │  ├─ chunks
│  │  │  ├─ 0-jU4uvUBP.js
│  │  │  ├─ 0-jU4uvUBP.js.map
│  │  │  ├─ 1-eaeJug-C.js
│  │  │  ├─ 1-eaeJug-C.js.map
│  │  │  ├─ 2-eKe5QZUT.js
│  │  │  ├─ 2-eKe5QZUT.js.map
│  │  │  ├─ 3-gf6Erryz.js
│  │  │  ├─ 3-gf6Erryz.js.map
│  │  │  ├─ _page.svelte-8Qzlu-BL.js
│  │  │  ├─ _page.svelte-8Qzlu-BL.js.map
│  │  │  ├─ _page.svelte-mZMa487y.js
│  │  │  ├─ _page.svelte-mZMa487y.js.map
│  │  │  ├─ error.svelte-s9P18Ht0.js
│  │  │  ├─ error.svelte-s9P18Ht0.js.map
│  │  │  ├─ index-3_3r1zwW.js
│  │  │  ├─ index-3_3r1zwW.js.map
│  │  │  ├─ layout.svelte-mJq4mo62.js
│  │  │  └─ layout.svelte-mJq4mo62.js.map
│  │  ├─ index.js
│  │  ├─ index.js.map
│  │  ├─ manifest.js
│  │  └─ manifest.js.map
│  └─ shims.js
├─ package-lock.json
├─ package.json
├─ playwright.config.js
├─ src
│  ├─ App.svelte
│  ├─ app.html
│  ├─ components
│  │  ├─ Footer.svelte
│  │  ├─ Header.svelte
│  │  ├─ homepage-top.mp4
│  │  └─ lottie.json
│  ├─ contents
│  │  ├─ blog
│  │  │  └─ 7-benefits-of-accepting-crypto-on-your-e-commerce.md
│  │  ├─ homepage.md
│  │  └─ new-row-2.md
│  ├─ global.css
│  ├─ global.scss
│  ├─ index.test.js
│  └─ routes
│     ├─ +page.svelte
│     └─ blog
│        └─ +page.svelte
├─ static
│  ├─ admin
│  │  ├─ config.yml
│  │  └─ index.html
│  ├─ favicon.png
│  ├─ homepage-cryptopayments.mp4
│  ├─ homepage-cryptopayouts.mp4
│  ├─ homepage-ecommerce-p&p.mp4
│  ├─ homepage-ecommerce-payments.mp4
│  ├─ homepage-ecommerce-payouts.mp4
│  ├─ homepage-luxury-p&p.mp4
│  ├─ homepage-luxury-payments.mp4
│  ├─ homepage-luxury-payouts.mp4
│  ├─ homepage-marketplace-p&p.mp4
│  ├─ homepage-marketplace-payments.mp4
│  ├─ homepage-marketplace-payouts.mp4
│  ├─ homepage-top.mp4
│  ├─ logo.svg
│  ├─ payments-page-top.mp4
│  ├─ payouts-page-top.mp4
│  └─ uploads
│     └─ nathan-dumlao-5hl5reicevy-unsplash.jpg
├─ svelte.config.js
├─ tests
│  └─ test.js
└─ vite.config.js

```