/**
 * Custom colors for using with themes
 */

import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper'

const Colors = {
  light: {
    default: {
      primary: MD3LightTheme.colors.primary,
      onPrimary: MD3LightTheme.colors.onPrimary
    },
    orange: {
      primary: 'rgb(176, 46, 0)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(255, 219, 209)',
      onPrimaryContainer: 'rgb(59, 9, 0)',
      secondary: 'rgb(119, 87, 78)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(255, 219, 209)',
      onSecondaryContainer: 'rgb(44, 21, 15)',
      tertiary: 'rgb(108, 93, 47)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(246, 225, 166)',
      onTertiaryContainer: 'rgb(35, 27, 0)',
      background: 'rgb(255, 251, 255)',
      onBackground: 'rgb(32, 26, 24)',
      surface: 'rgb(255, 251, 255)',
      onSurface: 'rgb(32, 26, 24)',
      surfaceVariant: 'rgb(245, 222, 216)',
      onSurfaceVariant: 'rgb(83, 67, 63)',
      outline: 'rgb(133, 115, 110)',
      outlineVariant: 'rgb(216, 194, 188)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(54, 47, 45)',
      inverseOnSurface: 'rgb(251, 238, 235)',
      inversePrimary: 'rgb(255, 181, 160)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(251, 241, 242)',
        level2: 'rgb(249, 235, 235)',
        level3: 'rgb(246, 229, 227)',
        level4: 'rgb(246, 226, 224)',
        level5: 'rgb(244, 222, 219)',
      },
      surfaceDisabled: 'rgba(32, 26, 24, 0.12)',
      onSurfaceDisabled: 'rgba(32, 26, 24, 0.38)',
      backdrop: 'rgba(59, 45, 41, 0.4)'
    },
    red: {
      primary: 'rgb(185, 12, 85)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(255, 217, 223)',
      onPrimaryContainer: 'rgb(63, 0, 24)',
      secondary: 'rgb(117, 86, 92)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(255, 217, 223)',
      onSecondaryContainer: 'rgb(43, 21, 26)',
      tertiary: 'rgb(122, 87, 51)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(255, 220, 189)',
      onTertiaryContainer: 'rgb(44, 22, 0)',
      background: 'rgb(255, 251, 255)',
      onBackground: 'rgb(32, 26, 27)',
      surface: 'rgb(255, 251, 255)',
      onSurface: 'rgb(32, 26, 27)',
      surfaceVariant: 'rgb(243, 221, 224)',
      onSurfaceVariant: 'rgb(82, 67, 70)',
      outline: 'rgb(132, 115, 117)',
      outlineVariant: 'rgb(214, 194, 196)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(53, 47, 48)',
      inverseOnSurface: 'rgb(250, 238, 239)',
      inversePrimary: 'rgb(255, 177, 194)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(252, 239, 247)',
        level2: 'rgb(249, 232, 241)',
        level3: 'rgb(247, 225, 236)',
        level4: 'rgb(247, 222, 235)',
        level5: 'rgb(245, 218, 231)',
      },
      surfaceDisabled: 'rgba(32, 26, 27, 0.12)',
      onSurfaceDisabled: 'rgba(32, 26, 27, 0.38)',
      backdrop: 'rgba(58, 45, 47, 0.4)'
    },
    violet: {
      primary: 'rgb(140, 51, 179)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(248, 216, 255)',
      onPrimaryContainer: 'rgb(50, 0, 71)',
      secondary: 'rgb(105, 89, 109)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(241, 220, 244)',
      onSecondaryContainer: 'rgb(35, 23, 40)',
      tertiary: 'rgb(129, 82, 80)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(255, 218, 216)',
      onTertiaryContainer: 'rgb(51, 17, 17)',
      background: 'rgb(255, 251, 255)',
      onBackground: 'rgb(30, 27, 30)',
      surface: 'rgb(255, 251, 255)',
      onSurface: 'rgb(30, 27, 30)',
      surfaceVariant: 'rgb(235, 223, 233)',
      onSurfaceVariant: 'rgb(76, 68, 77)',
      outline: 'rgb(125, 116, 125)',
      outlineVariant: 'rgb(206, 195, 205)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(51, 47, 51)',
      inverseOnSurface: 'rgb(246, 239, 243)',
      inversePrimary: 'rgb(235, 178, 255)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(249, 241, 251)',
        level2: 'rgb(246, 235, 249)',
        level3: 'rgb(242, 229, 247)',
        level4: 'rgb(241, 227, 246)',
        level5: 'rgb(239, 223, 244)',
      },
      surfaceDisabled: 'rgba(30, 27, 30, 0.12)',
      onSurfaceDisabled: 'rgba(30, 27, 30, 0.38)',
      backdrop: 'rgba(53, 46, 54, 0.4)'
    },
    indigo: {
      primary: 'rgb(104, 71, 192)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(232, 221, 255)',
      onPrimaryContainer: 'rgb(33, 0, 93)',
      secondary: 'rgb(97, 91, 113)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(232, 222, 248)',
      onSecondaryContainer: 'rgb(29, 25, 43)',
      tertiary: 'rgb(125, 82, 96)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(255, 217, 227)',
      onTertiaryContainer: 'rgb(49, 16, 29)',
      background: 'rgb(255, 251, 255)',
      onBackground: 'rgb(28, 27, 30)',
      surface: 'rgb(255, 251, 255)',
      onSurface: 'rgb(28, 27, 30)',
      surfaceVariant: 'rgb(230, 224, 236)',
      onSurfaceVariant: 'rgb(72, 69, 78)',
      outline: 'rgb(121, 117, 127)',
      outlineVariant: 'rgb(202, 196, 207)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(49, 48, 51)',
      inverseOnSurface: 'rgb(244, 239, 244)',
      inversePrimary: 'rgb(206, 189, 255)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(247, 242, 252)',
        level2: 'rgb(243, 237, 250)',
        level3: 'rgb(238, 231, 248)',
        level4: 'rgb(237, 229, 247)',
        level5: 'rgb(234, 226, 246)',
      },
      surfaceDisabled: 'rgba(28, 27, 30, 0.12)',
      onSurfaceDisabled: 'rgba(28, 27, 30, 0.38)',
      backdrop: 'rgba(50, 47, 56, 0.4)'
    },
    blue: {
      primary: 'rgb(0, 99, 154)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(206, 229, 255)',
      onPrimaryContainer: 'rgb(0, 29, 50)',
      secondary: 'rgb(81, 96, 111)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(213, 228, 247)',
      onSecondaryContainer: 'rgb(14, 29, 42)',
      tertiary: 'rgb(104, 88, 122)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(238, 219, 255)',
      onTertiaryContainer: 'rgb(35, 21, 51)',
      background: 'rgb(252, 252, 255)',
      onBackground: 'rgb(26, 28, 30)',
      surface: 'rgb(252, 252, 255)',
      onSurface: 'rgb(26, 28, 30)',
      surfaceVariant: 'rgb(222, 227, 235)',
      onSurfaceVariant: 'rgb(66, 71, 78)',
      outline: 'rgb(114, 119, 127)',
      outlineVariant: 'rgb(194, 199, 207)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(47, 48, 51)',
      inverseOnSurface: 'rgb(240, 240, 244)',
      inversePrimary: 'rgb(150, 204, 255)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(239, 244, 250)',
        level2: 'rgb(232, 240, 247)',
        level3: 'rgb(224, 235, 244)',
        level4: 'rgb(222, 234, 243)',
        level5: 'rgb(217, 231, 241)',
      },
      surfaceDisabled: 'rgba(26, 28, 30, 0.12)',
      onSurfaceDisabled: 'rgba(26, 28, 30, 0.38)',
      backdrop: 'rgba(44, 49, 55, 0.4)'
    },
    teal: {
      primary: 'rgb(0, 104, 116)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(151, 240, 255)',
      onPrimaryContainer: 'rgb(0, 31, 36)',
      secondary: 'rgb(74, 98, 103)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(205, 231, 236)',
      onSecondaryContainer: 'rgb(5, 31, 35)',
      tertiary: 'rgb(82, 94, 125)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(218, 226, 255)',
      onTertiaryContainer: 'rgb(14, 27, 55)',
      background: 'rgb(250, 253, 253)',
      onBackground: 'rgb(25, 28, 29)',
      surface: 'rgb(250, 253, 253)',
      onSurface: 'rgb(25, 28, 29)',
      surfaceVariant: 'rgb(219, 228, 230)',
      onSurfaceVariant: 'rgb(63, 72, 74)',
      outline: 'rgb(111, 121, 122)',
      outlineVariant: 'rgb(191, 200, 202)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(46, 49, 50)',
      inverseOnSurface: 'rgb(239, 241, 241)',
      inversePrimary: 'rgb(79, 216, 235)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(238, 246, 246)',
        level2: 'rgb(230, 241, 242)',
        level3: 'rgb(223, 237, 238)',
        level4: 'rgb(220, 235, 237)',
        level5: 'rgb(215, 232, 234)',
      },
      surfaceDisabled: 'rgba(25, 28, 29, 0.12)',
      onSurfaceDisabled: 'rgba(25, 28, 29, 0.38)',
      backdrop: 'rgba(41, 50, 52, 0.4)'
    },
    cyan: {
      primary: 'rgb(0, 107, 94)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(118, 248, 226)',
      onPrimaryContainer: 'rgb(0, 32, 27)',
      secondary: 'rgb(74, 99, 94)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(205, 232, 225)',
      onSecondaryContainer: 'rgb(6, 32, 27)',
      tertiary: 'rgb(68, 97, 121)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(202, 230, 255)',
      onTertiaryContainer: 'rgb(0, 30, 48)',
      background: 'rgb(250, 253, 251)',
      onBackground: 'rgb(25, 28, 27)',
      surface: 'rgb(250, 253, 251)',
      onSurface: 'rgb(25, 28, 27)',
      surfaceVariant: 'rgb(218, 229, 225)',
      onSurfaceVariant: 'rgb(63, 73, 70)',
      outline: 'rgb(111, 121, 118)',
      outlineVariant: 'rgb(190, 201, 197)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(45, 49, 48)',
      inverseOnSurface: 'rgb(239, 241, 239)',
      inversePrimary: 'rgb(85, 219, 198)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(238, 246, 243)',
        level2: 'rgb(230, 241, 238)',
        level3: 'rgb(223, 237, 234)',
        level4: 'rgb(220, 236, 232)',
        level5: 'rgb(215, 233, 229)',
      },
      surfaceDisabled: 'rgba(25, 28, 27, 0.12)',
      onSurfaceDisabled: 'rgba(25, 28, 27, 0.38)',
      backdrop: 'rgba(41, 50, 48, 0.4)'
    },
    green: {
      primary: 'rgb(16, 109, 32)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(157, 248, 152)',
      onPrimaryContainer: 'rgb(0, 34, 4)',
      secondary: 'rgb(82, 99, 79)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(213, 232, 206)',
      onSecondaryContainer: 'rgb(17, 31, 15)',
      tertiary: 'rgb(56, 101, 106)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(188, 235, 240)',
      onTertiaryContainer: 'rgb(0, 32, 35)',
      background: 'rgb(252, 253, 246)',
      onBackground: 'rgb(26, 28, 25)',
      surface: 'rgb(252, 253, 246)',
      onSurface: 'rgb(26, 28, 25)',
      surfaceVariant: 'rgb(222, 229, 216)',
      onSurfaceVariant: 'rgb(66, 73, 64)',
      outline: 'rgb(114, 121, 111)',
      outlineVariant: 'rgb(194, 201, 189)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(47, 49, 45)',
      inverseOnSurface: 'rgb(240, 241, 235)',
      inversePrimary: 'rgb(130, 219, 126)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(240, 246, 235)',
        level2: 'rgb(233, 242, 229)',
        level3: 'rgb(226, 237, 223)',
        level4: 'rgb(224, 236, 220)',
        level5: 'rgb(219, 233, 216)',
      },
      surfaceDisabled: 'rgba(26, 28, 25, 0.12)',
      onSurfaceDisabled: 'rgba(26, 28, 25, 0.38)',
      backdrop: 'rgba(44, 50, 42, 0.4)'
    },
    lime: {
      primary: 'rgb(56, 107, 1)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(183, 244, 129)',
      onPrimaryContainer: 'rgb(13, 32, 0)',
      secondary: 'rgb(87, 98, 74)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(218, 231, 201)',
      onSecondaryContainer: 'rgb(21, 30, 12)',
      tertiary: 'rgb(56, 102, 100)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(187, 236, 233)',
      onTertiaryContainer: 'rgb(0, 32, 31)',
      background: 'rgb(253, 253, 245)',
      onBackground: 'rgb(26, 28, 24)',
      surface: 'rgb(253, 253, 245)',
      onSurface: 'rgb(26, 28, 24)',
      surfaceVariant: 'rgb(224, 228, 214)',
      onSurfaceVariant: 'rgb(68, 72, 62)',
      outline: 'rgb(116, 121, 109)',
      outlineVariant: 'rgb(196, 200, 186)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(47, 49, 44)',
      inverseOnSurface: 'rgb(241, 241, 234)',
      inversePrimary: 'rgb(156, 215, 105)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(243, 246, 233)',
        level2: 'rgb(237, 241, 226)',
        level3: 'rgb(231, 237, 218)',
        level4: 'rgb(229, 236, 216)',
        level5: 'rgb(225, 233, 211)',
      },
      surfaceDisabled: 'rgba(26, 28, 24, 0.12)',
      onSurfaceDisabled: 'rgba(26, 28, 24, 0.38)',
      backdrop: 'rgba(45, 50, 40, 0.4)'
    },
    olive: {
      primary: 'rgb(95, 98, 0)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(229, 234, 93)',
      onPrimaryContainer: 'rgb(28, 29, 0)',
      secondary: 'rgb(96, 96, 67)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(229, 229, 192)',
      onSecondaryContainer: 'rgb(28, 29, 6)',
      tertiary: 'rgb(61, 102, 88)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(191, 236, 218)',
      onTertiaryContainer: 'rgb(0, 33, 24)',
      background: 'rgb(255, 251, 255)',
      onBackground: 'rgb(28, 28, 23)',
      surface: 'rgb(255, 251, 255)',
      onSurface: 'rgb(28, 28, 23)',
      surfaceVariant: 'rgb(229, 227, 209)',
      onSurfaceVariant: 'rgb(72, 71, 59)',
      outline: 'rgb(121, 120, 105)',
      outlineVariant: 'rgb(201, 199, 182)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(49, 49, 43)',
      inverseOnSurface: 'rgb(244, 240, 232)',
      inversePrimary: 'rgb(200, 206, 68)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(247, 243, 242)',
        level2: 'rgb(242, 239, 235)',
        level3: 'rgb(237, 234, 227)',
        level4: 'rgb(236, 233, 224)',
        level5: 'rgb(233, 230, 219)',
      },
      surfaceDisabled: 'rgba(28, 28, 23, 0.12)',
      onSurfaceDisabled: 'rgba(28, 28, 23, 0.38)',
      backdrop: 'rgba(49, 49, 37, 0.4)'
    },
    brown: {
      primary: 'rgb(155, 68, 39)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(255, 219, 208)',
      onPrimaryContainer: 'rgb(58, 11, 0)',
      secondary: 'rgb(119, 87, 77)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(255, 219, 208)',
      onSecondaryContainer: 'rgb(44, 22, 14)',
      tertiary: 'rgb(107, 94, 47)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(244, 226, 167)',
      onTertiaryContainer: 'rgb(34, 27, 0)',
      background: 'rgb(255, 251, 255)',
      onBackground: 'rgb(32, 26, 24)',
      surface: 'rgb(255, 251, 255)',
      onSurface: 'rgb(32, 26, 24)',
      surfaceVariant: 'rgb(245, 222, 215)',
      onSurfaceVariant: 'rgb(83, 67, 63)',
      outline: 'rgb(133, 115, 110)',
      outlineVariant: 'rgb(216, 194, 188)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(54, 47, 45)',
      inverseOnSurface: 'rgb(251, 238, 234)',
      inversePrimary: 'rgb(255, 181, 158)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(250, 242, 244)',
        level2: 'rgb(247, 236, 238)',
        level3: 'rgb(244, 231, 231)',
        level4: 'rgb(243, 229, 229)',
        level5: 'rgb(241, 225, 225)',
      },
      surfaceDisabled: 'rgba(32, 26, 24, 0.12)',
      onSurfaceDisabled: 'rgba(32, 26, 24, 0.38)',
      backdrop: 'rgba(59, 45, 41, 0.4)'
    },
  },
  dark: {
    default: {
      primary: MD3DarkTheme.colors.primary,
      onPrimary: MD3DarkTheme.colors.onPrimary
    },
    orange: {
      primary: 'rgb(255, 183, 134)',
      onPrimary: 'rgb(80, 36, 0)',
      primaryContainer: 'rgb(114, 54, 0)',
      onPrimaryContainer: 'rgb(255, 220, 198)',
      secondary: 'rgb(229, 191, 168)',
      onSecondary: 'rgb(66, 43, 27)',
      secondaryContainer: 'rgb(91, 65, 48)',
      onSecondaryContainer: 'rgb(255, 220, 198)',
      tertiary: 'rgb(201, 202, 147)',
      onTertiary: 'rgb(49, 50, 10)',
      tertiaryContainer: 'rgb(72, 73, 31)',
      onTertiaryContainer: 'rgb(229, 230, 173)',
      error: 'rgb(255, 180, 171)',
      onError: 'rgb(105, 0, 5)',
      errorContainer: 'rgb(147, 0, 10)',
      onErrorContainer: 'rgb(255, 180, 171)',
      background: 'rgb(32, 26, 23)',
      onBackground: 'rgb(236, 224, 218)',
      surface: 'rgb(32, 26, 23)',
      onSurface: 'rgb(236, 224, 218)',
      surfaceVariant: 'rgb(82, 68, 60)',
      onSurfaceVariant: 'rgb(215, 195, 183)',
      outline: 'rgb(159, 141, 131)',
      outlineVariant: 'rgb(82, 68, 60)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(236, 224, 218)',
      inverseOnSurface: 'rgb(54, 47, 43)',
      inversePrimary: 'rgb(150, 73, 0)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(43, 34, 29)',
        level2: 'rgb(50, 39, 32)',
        level3: 'rgb(57, 43, 35)',
        level4: 'rgb(59, 45, 36)',
        level5: 'rgb(63, 48, 39)',
      },
      surfaceDisabled: 'rgba(236, 224, 218, 0.12)',
      onSurfaceDisabled: 'rgba(236, 224, 218, 0.38)',
      backdrop: 'rgba(58, 46, 38, 0.4)'
    },
    red: {
      primary: 'rgb(255, 177, 194)',
      onPrimary: 'rgb(102, 0, 43)',
      primaryContainer: 'rgb(143, 0, 63)',
      onPrimaryContainer: 'rgb(255, 217, 223)',
      secondary: 'rgb(228, 189, 195)',
      onSecondary: 'rgb(67, 41, 47)',
      secondaryContainer: 'rgb(91, 63, 69)',
      onSecondaryContainer: 'rgb(255, 217, 223)',
      tertiary: 'rgb(236, 190, 145)',
      onTertiary: 'rgb(70, 42, 9)',
      tertiaryContainer: 'rgb(96, 64, 29)',
      onTertiaryContainer: 'rgb(255, 220, 189)',
      error: 'rgb(255, 180, 171)',
      onError: 'rgb(105, 0, 5)',
      errorContainer: 'rgb(147, 0, 10)',
      onErrorContainer: 'rgb(255, 180, 171)',
      background: 'rgb(32, 26, 27)',
      onBackground: 'rgb(236, 224, 224)',
      surface: 'rgb(32, 26, 27)',
      onSurface: 'rgb(236, 224, 224)',
      surfaceVariant: 'rgb(82, 67, 70)',
      onSurfaceVariant: 'rgb(214, 194, 196)',
      outline: 'rgb(158, 140, 143)',
      outlineVariant: 'rgb(82, 67, 70)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(236, 224, 224)',
      inverseOnSurface: 'rgb(53, 47, 48)',
      inversePrimary: 'rgb(185, 12, 85)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(43, 34, 35)',
        level2: 'rgb(50, 38, 40)',
        level3: 'rgb(57, 43, 45)',
        level4: 'rgb(59, 44, 47)',
        level5: 'rgb(63, 47, 50)',
      },
      surfaceDisabled: 'rgba(236, 224, 224, 0.12)',
      onSurfaceDisabled: 'rgba(236, 224, 224, 0.38)',
      backdrop: 'rgba(58, 45, 47, 0.4)'
    },
    violet: {
      primary: 'rgb(235, 178, 255)',
      onPrimary: 'rgb(82, 0, 113)',
      primaryContainer: 'rgb(114, 17, 153)',
      onPrimaryContainer: 'rgb(248, 216, 255)',
      secondary: 'rgb(212, 192, 215)',
      onSecondary: 'rgb(57, 44, 61)',
      secondaryContainer: 'rgb(80, 66, 85)',
      onSecondaryContainer: 'rgb(241, 220, 244)',
      tertiary: 'rgb(245, 183, 181)',
      onTertiary: 'rgb(76, 37, 36)',
      tertiaryContainer: 'rgb(102, 59, 57)',
      onTertiaryContainer: 'rgb(255, 218, 216)',
      error: 'rgb(255, 180, 171)',
      onError: 'rgb(105, 0, 5)',
      errorContainer: 'rgb(147, 0, 10)',
      onErrorContainer: 'rgb(255, 180, 171)',
      background: 'rgb(30, 27, 30)',
      onBackground: 'rgb(232, 224, 229)',
      surface: 'rgb(30, 27, 30)',
      onSurface: 'rgb(232, 224, 229)',
      surfaceVariant: 'rgb(76, 68, 77)',
      onSurfaceVariant: 'rgb(206, 195, 205)',
      outline: 'rgb(151, 142, 151)',
      outlineVariant: 'rgb(76, 68, 77)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(232, 224, 229)',
      inverseOnSurface: 'rgb(51, 47, 51)',
      inversePrimary: 'rgb(140, 51, 179)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(40, 35, 41)',
        level2: 'rgb(46, 39, 48)',
        level3: 'rgb(53, 44, 55)',
        level4: 'rgb(55, 45, 57)',
        level5: 'rgb(59, 48, 62)',
      },
      surfaceDisabled: 'rgba(232, 224, 229, 0.12)',
      onSurfaceDisabled: 'rgba(232, 224, 229, 0.38)',
      backdrop: 'rgba(53, 46, 54, 0.4)'
    },
    indigo: {
      primary: 'rgb(206, 189, 255)',
      onPrimary: 'rgb(57, 5, 144)',
      primaryContainer: 'rgb(80, 43, 167)',
      onPrimaryContainer: 'rgb(232, 221, 255)',
      secondary: 'rgb(203, 195, 220)',
      onSecondary: 'rgb(51, 45, 65)',
      secondaryContainer: 'rgb(73, 68, 88)',
      onSecondaryContainer: 'rgb(232, 222, 248)',
      tertiary: 'rgb(239, 184, 201)',
      onTertiary: 'rgb(73, 37, 50)',
      tertiaryContainer: 'rgb(99, 59, 73)',
      onTertiaryContainer: 'rgb(255, 217, 227)',
      error: 'rgb(255, 180, 171)',
      onError: 'rgb(105, 0, 5)',
      errorContainer: 'rgb(147, 0, 10)',
      onErrorContainer: 'rgb(255, 180, 171)',
      background: 'rgb(28, 27, 30)',
      onBackground: 'rgb(230, 225, 230)',
      surface: 'rgb(28, 27, 30)',
      onSurface: 'rgb(230, 225, 230)',
      surfaceVariant: 'rgb(72, 69, 78)',
      onSurfaceVariant: 'rgb(202, 196, 207)',
      outline: 'rgb(148, 143, 153)',
      outlineVariant: 'rgb(72, 69, 78)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(230, 225, 230)',
      inverseOnSurface: 'rgb(49, 48, 51)',
      inversePrimary: 'rgb(104, 71, 192)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(37, 35, 41)',
        level2: 'rgb(42, 40, 48)',
        level3: 'rgb(48, 45, 55)',
        level4: 'rgb(49, 46, 57)',
        level5: 'rgb(53, 50, 62)',
      },
      surfaceDisabled: 'rgba(230, 225, 230, 0.12)',
      onSurfaceDisabled: 'rgba(230, 225, 230, 0.38)',
      backdrop: 'rgba(50, 47, 56, 0.4)'
    },
    blue: {
      primary: 'rgb(150, 204, 255)',
      onPrimary: 'rgb(0, 51, 83)',
      primaryContainer: 'rgb(0, 74, 117)',
      onPrimaryContainer: 'rgb(206, 229, 255)',
      secondary: 'rgb(185, 200, 218)',
      onSecondary: 'rgb(35, 50, 64)',
      secondaryContainer: 'rgb(58, 72, 87)',
      onSecondaryContainer: 'rgb(213, 228, 247)',
      tertiary: 'rgb(211, 191, 230)',
      onTertiary: 'rgb(56, 42, 73)',
      tertiaryContainer: 'rgb(79, 64, 97)',
      onTertiaryContainer: 'rgb(238, 219, 255)',
      error: 'rgb(255, 180, 171)',
      onError: 'rgb(105, 0, 5)',
      errorContainer: 'rgb(147, 0, 10)',
      onErrorContainer: 'rgb(255, 180, 171)',
      background: 'rgb(26, 28, 30)',
      onBackground: 'rgb(226, 226, 229)',
      surface: 'rgb(26, 28, 30)',
      onSurface: 'rgb(226, 226, 229)',
      surfaceVariant: 'rgb(66, 71, 78)',
      onSurfaceVariant: 'rgb(194, 199, 207)',
      outline: 'rgb(140, 145, 152)',
      outlineVariant: 'rgb(66, 71, 78)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(226, 226, 229)',
      inverseOnSurface: 'rgb(47, 48, 51)',
      inversePrimary: 'rgb(0, 99, 154)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(32, 37, 41)',
        level2: 'rgb(36, 42, 48)',
        level3: 'rgb(40, 47, 55)',
        level4: 'rgb(41, 49, 57)',
        level5: 'rgb(43, 53, 62)',
      },
      surfaceDisabled: 'rgba(226, 226, 229, 0.12)',
      onSurfaceDisabled: 'rgba(226, 226, 229, 0.38)',
      backdrop: 'rgba(44, 49, 55, 0.4)'
    },
    teal: {
      primary: 'rgb(79, 216, 235)',
      onPrimary: 'rgb(0, 54, 61)',
      primaryContainer: 'rgb(0, 79, 88)',
      onPrimaryContainer: 'rgb(151, 240, 255)',
      secondary: 'rgb(177, 203, 208)',
      onSecondary: 'rgb(28, 52, 56)',
      secondaryContainer: 'rgb(51, 75, 79)',
      onSecondaryContainer: 'rgb(205, 231, 236)',
      tertiary: 'rgb(186, 198, 234)',
      onTertiary: 'rgb(36, 48, 77)',
      tertiaryContainer: 'rgb(59, 70, 100)',
      onTertiaryContainer: 'rgb(218, 226, 255)',
      error: 'rgb(255, 180, 171)',
      onError: 'rgb(105, 0, 5)',
      errorContainer: 'rgb(147, 0, 10)',
      onErrorContainer: 'rgb(255, 180, 171)',
      background: 'rgb(25, 28, 29)',
      onBackground: 'rgb(225, 227, 227)',
      surface: 'rgb(25, 28, 29)',
      onSurface: 'rgb(225, 227, 227)',
      surfaceVariant: 'rgb(63, 72, 74)',
      onSurfaceVariant: 'rgb(191, 200, 202)',
      outline: 'rgb(137, 146, 148)',
      outlineVariant: 'rgb(63, 72, 74)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(225, 227, 227)',
      inverseOnSurface: 'rgb(46, 49, 50)',
      inversePrimary: 'rgb(0, 104, 116)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(28, 37, 39)',
        level2: 'rgb(29, 43, 46)',
        level3: 'rgb(31, 49, 52)',
        level4: 'rgb(32, 51, 54)',
        level5: 'rgb(33, 54, 58)',
      },
      surfaceDisabled: 'rgba(225, 227, 227, 0.12)',
      onSurfaceDisabled: 'rgba(225, 227, 227, 0.38)',
      backdrop: 'rgba(41, 50, 52, 0.4)'
    },
    cyan: {
      primary: 'rgb(85, 219, 198)',
      onPrimary: 'rgb(0, 55, 48)',
      primaryContainer: 'rgb(0, 80, 71)',
      onPrimaryContainer: 'rgb(118, 248, 226)',
      secondary: 'rgb(177, 204, 197)',
      onSecondary: 'rgb(28, 53, 48)',
      secondaryContainer: 'rgb(51, 75, 70)',
      onSecondaryContainer: 'rgb(205, 232, 225)',
      tertiary: 'rgb(172, 202, 229)',
      onTertiary: 'rgb(19, 51, 72)',
      tertiaryContainer: 'rgb(44, 74, 96)',
      onTertiaryContainer: 'rgb(202, 230, 255)',
      error: 'rgb(255, 180, 171)',
      onError: 'rgb(105, 0, 5)',
      errorContainer: 'rgb(147, 0, 10)',
      onErrorContainer: 'rgb(255, 180, 171)',
      background: 'rgb(25, 28, 27)',
      onBackground: 'rgb(224, 227, 225)',
      surface: 'rgb(25, 28, 27)',
      onSurface: 'rgb(224, 227, 225)',
      surfaceVariant: 'rgb(63, 73, 70)',
      onSurfaceVariant: 'rgb(190, 201, 197)',
      outline: 'rgb(137, 147, 144)',
      outlineVariant: 'rgb(63, 73, 70)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(224, 227, 225)',
      inverseOnSurface: 'rgb(45, 49, 48)',
      inversePrimary: 'rgb(0, 107, 94)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(28, 38, 36)',
        level2: 'rgb(30, 43, 41)',
        level3: 'rgb(32, 49, 46)',
        level4: 'rgb(32, 51, 48)',
        level5: 'rgb(33, 55, 51)',
      },
      surfaceDisabled: 'rgba(224, 227, 225, 0.12)',
      onSurfaceDisabled: 'rgba(224, 227, 225, 0.38)',
      backdrop: 'rgba(41, 50, 48, 0.4)'
    },
    green: {
      primary: 'rgb(130, 219, 126)',
      onPrimary: 'rgb(0, 57, 10)',
      primaryContainer: 'rgb(0, 83, 18)',
      onPrimaryContainer: 'rgb(157, 248, 152)',
      secondary: 'rgb(186, 204, 179)',
      onSecondary: 'rgb(37, 52, 35)',
      secondaryContainer: 'rgb(59, 75, 56)',
      onSecondaryContainer: 'rgb(213, 232, 206)',
      tertiary: 'rgb(160, 207, 212)',
      onTertiary: 'rgb(0, 54, 59)',
      tertiaryContainer: 'rgb(31, 77, 82)',
      onTertiaryContainer: 'rgb(188, 235, 240)',
      error: 'rgb(255, 180, 171)',
      onError: 'rgb(105, 0, 5)',
      errorContainer: 'rgb(147, 0, 10)',
      onErrorContainer: 'rgb(255, 180, 171)',
      background: 'rgb(26, 28, 25)',
      onBackground: 'rgb(226, 227, 221)',
      surface: 'rgb(26, 28, 25)',
      onSurface: 'rgb(226, 227, 221)',
      surfaceVariant: 'rgb(66, 73, 64)',
      onSurfaceVariant: 'rgb(194, 201, 189)',
      outline: 'rgb(140, 147, 136)',
      outlineVariant: 'rgb(66, 73, 64)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(226, 227, 221)',
      inverseOnSurface: 'rgb(47, 49, 45)',
      inversePrimary: 'rgb(16, 109, 32)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(31, 38, 30)',
        level2: 'rgb(34, 43, 33)',
        level3: 'rgb(37, 49, 36)',
        level4: 'rgb(39, 51, 37)',
        level5: 'rgb(41, 55, 39)',
      },
      surfaceDisabled: 'rgba(226, 227, 221, 0.12)',
      onSurfaceDisabled: 'rgba(226, 227, 221, 0.38)',
      backdrop: 'rgba(44, 50, 42, 0.4)'
    },
    lime: {
      primary: 'rgb(156, 215, 105)',
      onPrimary: 'rgb(26, 55, 0)',
      primaryContainer: 'rgb(40, 80, 0)',
      onPrimaryContainer: 'rgb(183, 244, 129)',
      secondary: 'rgb(190, 203, 174)',
      onSecondary: 'rgb(41, 52, 31)',
      secondaryContainer: 'rgb(63, 74, 52)',
      onSecondaryContainer: 'rgb(218, 231, 201)',
      tertiary: 'rgb(160, 207, 205)',
      onTertiary: 'rgb(0, 55, 54)',
      tertiaryContainer: 'rgb(30, 78, 77)',
      onTertiaryContainer: 'rgb(187, 236, 233)',
      error: 'rgb(255, 180, 171)',
      onError: 'rgb(105, 0, 5)',
      errorContainer: 'rgb(147, 0, 10)',
      onErrorContainer: 'rgb(255, 180, 171)',
      background: 'rgb(26, 28, 24)',
      onBackground: 'rgb(227, 227, 220)',
      surface: 'rgb(26, 28, 24)',
      onSurface: 'rgb(227, 227, 220)',
      surfaceVariant: 'rgb(68, 72, 62)',
      onSurfaceVariant: 'rgb(196, 200, 186)',
      outline: 'rgb(142, 146, 134)',
      outlineVariant: 'rgb(68, 72, 62)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(227, 227, 220)',
      inverseOnSurface: 'rgb(47, 49, 44)',
      inversePrimary: 'rgb(56, 107, 1)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(33, 37, 28)',
        level2: 'rgb(36, 43, 31)',
        level3: 'rgb(40, 49, 33)',
        level4: 'rgb(42, 50, 34)',
        level5: 'rgb(44, 54, 35)',
      },
      surfaceDisabled: 'rgba(227, 227, 220, 0.12)',
      onSurfaceDisabled: 'rgba(227, 227, 220, 0.38)',
      backdrop: 'rgba(45, 50, 40, 0.4)'
    },
    olive: {
      primary: 'rgb(200, 206, 68)',
      onPrimary: 'rgb(49, 51, 0)',
      primaryContainer: 'rgb(71, 74, 0)',
      onPrimaryContainer: 'rgb(229, 234, 93)',
      secondary: 'rgb(201, 201, 165)',
      onSecondary: 'rgb(49, 50, 25)',
      secondaryContainer: 'rgb(72, 72, 45)',
      onSecondaryContainer: 'rgb(229, 229, 192)',
      tertiary: 'rgb(163, 208, 190)',
      onTertiary: 'rgb(9, 55, 43)',
      tertiaryContainer: 'rgb(36, 78, 65)',
      onTertiaryContainer: 'rgb(191, 236, 218)',
      error: 'rgb(255, 180, 171)',
      onError: 'rgb(105, 0, 5)',
      errorContainer: 'rgb(147, 0, 10)',
      onErrorContainer: 'rgb(255, 180, 171)',
      background: 'rgb(28, 28, 23)',
      onBackground: 'rgb(229, 226, 218)',
      surface: 'rgb(28, 28, 23)',
      onSurface: 'rgb(229, 226, 218)',
      surfaceVariant: 'rgb(72, 71, 59)',
      onSurfaceVariant: 'rgb(201, 199, 182)',
      outline: 'rgb(147, 145, 130)',
      outlineVariant: 'rgb(72, 71, 59)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(229, 226, 218)',
      inverseOnSurface: 'rgb(49, 49, 43)',
      inversePrimary: 'rgb(95, 98, 0)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(37, 37, 25)',
        level2: 'rgb(42, 42, 27)',
        level3: 'rgb(47, 48, 28)',
        level4: 'rgb(49, 49, 28)',
        level5: 'rgb(52, 53, 29)',
      },
      surfaceDisabled: 'rgba(229, 226, 218, 0.12)',
      onSurfaceDisabled: 'rgba(229, 226, 218, 0.38)',
      backdrop: 'rgba(49, 49, 37, 0.4)'
    },
    brown: {
      primary: 'rgb(255, 181, 158)',
      onPrimary: 'rgb(93, 24, 0)',
      primaryContainer: 'rgb(124, 45, 18)',
      onPrimaryContainer: 'rgb(255, 219, 208)',
      secondary: 'rgb(231, 189, 177)',
      onSecondary: 'rgb(68, 42, 34)',
      secondaryContainer: 'rgb(93, 64, 55)',
      onSecondaryContainer: 'rgb(255, 219, 208)',
      tertiary: 'rgb(215, 198, 141)',
      onTertiary: 'rgb(58, 48, 5)',
      tertiaryContainer: 'rgb(82, 70, 26)',
      onTertiaryContainer: 'rgb(244, 226, 167)',
      error: 'rgb(255, 180, 171)',
      onError: 'rgb(105, 0, 5)',
      errorContainer: 'rgb(147, 0, 10)',
      onErrorContainer: 'rgb(255, 180, 171)',
      background: 'rgb(32, 26, 24)',
      onBackground: 'rgb(237, 224, 220)',
      surface: 'rgb(32, 26, 24)',
      onSurface: 'rgb(237, 224, 220)',
      surfaceVariant: 'rgb(83, 67, 63)',
      onSurfaceVariant: 'rgb(216, 194, 188)',
      outline: 'rgb(160, 141, 135)',
      outlineVariant: 'rgb(83, 67, 63)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(237, 224, 220)',
      inverseOnSurface: 'rgb(54, 47, 45)',
      inversePrimary: 'rgb(155, 68, 39)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(43, 34, 31)',
        level2: 'rgb(50, 38, 35)',
        level3: 'rgb(57, 43, 39)',
        level4: 'rgb(59, 45, 40)',
        level5: 'rgb(63, 48, 43)',
      },
      surfaceDisabled: 'rgba(237, 224, 220, 0.12)',
      onSurfaceDisabled: 'rgba(237, 224, 220, 0.38)',
      backdrop: 'rgba(59, 45, 41, 0.4)'
    },
  },
}

export default Colors
