# Eliminate Maximum Number of Monsters

You are playing a video game where you need to defend your city from a group of monsters. Each monster has an initial distance from the city and a speed at which it moves towards the city. You have a weapon that can eliminate a monster, but it takes one minute to charge.

The goal is to eliminate as many monsters as possible before any of them reach the city. If a monster reaches the city at the exact moment the weapon is fully charged, it counts as a loss.

## Example 1

**Input:**
```
dist = [1, 3, 4]
speed = [1, 1, 1]
```

**Output:**
```
3
```

**Explanation:**

In the beginning, the distances of the monsters are `[1, 3, 4]`. You eliminate the first monster.

After a minute, the distances of the monsters are `[X, 2, 3]`. You eliminate the second monster.

After another minute, the distances of the monsters are `[X, X, 2]`. You eliminate the third monster.

All 3 monsters can be eliminated.

## Example 2

**Input:**
```
dist = [1, 1, 2, 3]
speed = [1, 1, 1, 1]
```

**Output:**
```
1
```

**Explanation:**

In the beginning, the distances of the monsters are `[1, 1, 2, 3]`. You eliminate the first monster.

After a minute, the distances of the monsters are `[X, 0, 1, 2]`, so you lose.

You can only eliminate 1 monster.

## Example 3

**Input:**
```
dist = [3, 2, 4]
speed = [5, 3, 2]
```

**Output:**
```
1
```

**Explanation:**

In the beginning, the distances of the monsters are `[3, 2, 4]`. You eliminate the first monster.

After a minute, the distances of the monsters are `[X, 0, 2]`, so you lose.

You can only eliminate 1 monster.

## Constraints
- The length of `dist` and `speed` is the same.
- 1 <= n <= 105
- 1 <= dist[i], speed[i] <= 105
