# Go!

>**Note**: This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Introduction

Welcome to Go! Go, also known as Baduk, Weiqi, and Igo, is a board game for two players. While it is a very complex game when played at a high level, it is also a simple game to learn for beginners. Go has been around for thousands of years and the rules have much remained the same. While this game is still celebrated by millions around the world, I struggled to find a good implementation of the game on the app store. Thus sparked my motivation to create a React Native implementation of the game.

## The Game

The game is played on a grid of black lines, with each intersection called a point. The players take turns placing stones on the points. The goal is to surround empty points, called territory, with your stones.

When a stone is place, the open spaces around each of the four adjacent sides are called liberties. If a stone has no liberties, it is captured and removed from the board. A piece may not be placed on a point if it would have no liberties.

The game ends when both players pass their turn. To pass, a player simply says "pass" and the other player may continue to place stones. Once both players consecutively pass, the game is over and the score is calculated.

Each captured area of territory has a value of 1 point. Additionally, each captured piece adds one to the total. At the conclusion of the game, each player tabulates their score by counting the number of points in their territory and the number of stones they have captured. The player with the most points wins.

## The Board

In traditional Go, the board is a 19x19 grid. For beginner and intermediate learners of the game, a 9x9 or 13x13 grid is recommended. In this implementation, players may choose between a 7x7, 9x9, 13x13, or 19x19 grid.
