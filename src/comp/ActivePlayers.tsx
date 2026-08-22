import { useCallback, useEffect, useState } from "react";
import { CRON } from "../cron";
import { queueFetch } from "../util";
import { DataSection, DataTable, SectionTitle } from "./shared";

type Pair<T> = [T, T];
const modes: Pair<Pair<string>>[] = [
  [
    ["welcome", "Welcome"],
    ["menu", "Menu"],
  ],
  [
    ["how_to_play", "How to Play"],
    ["training", "Training"],
  ],
  [
    ["vs_local", "Local Versus"],
    ["vs_cpu", "Versus CPU"],
  ],
  [
    ["arcade_easy", "Story (Easy)"],
    ["arcade_hard", "Story (Hard)"],
  ],
  [
    ["arcade_story", "Story (Auto)"],
    ["replay", "Replay"],
  ],
  [
    ["online_ranked", "Ranked Match"],
    ["online_casual", "Casual Match"],
  ],
  [
    ["online_private", "Private Match"],
    ["online_lobby", "Private Lobby"],
  ],
  [
    ["online_account", "Account Login"],
    ["online_stats", "Account Stats"],
  ],
  [
    ["frame_data", "Frame Data"],
    ["debug_ref", "Debug Ref"],
  ],
  [
    ["modding", "Modding"],
    ["about", "About"],
  ],
  [
    ["online_leaderboard", "Leaderboard"],
    ["hall_of_fame", "Hall of Fame"],
  ],
];

export function ActivePlayers() {
  const [counts, setCounts] = useState(
    undefined as Record<string, number> | undefined,
  );

  const fetchCounts = useCallback(async () => {
    const response = await queueFetch("https://presence.toughlovearena.com");
    const counts = (await response.json()) as Record<string, number>;
    setCounts(counts);
  }, [setCounts]);
  useEffect(
    () => CRON.register("activePlayers", () => fetchCounts()),
    [fetchCounts],
  );

  const total = counts
    ? Object.values(counts).reduce((c, sum) => sum + c, 0)
    : "???";
  const renderCount = (key: string) => (counts && counts[key]) ?? "?";

  return (
    <DataSection>
      <SectionTitle>Active Players: {total}</SectionTitle>
      <DataTable>
        <thead>
          <tr>
            <th>Game Mode</th>
            <th>#</th>
            <th>Game Mode</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {modes.map((row, pi) => (
            <tr key={`mode-${pi}`}>
              {row.map(([key, label]) => (
                <>
                  <td>{label}</td>
                  <td>{renderCount(key)}</td>
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </DataTable>
    </DataSection>
  );
}
