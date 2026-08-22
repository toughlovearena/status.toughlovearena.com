import { useCallback, useEffect, useState } from "react";
import { CRON } from "../cron";
import { queueFetch } from "../util";
import { DataSection, DataTable, SectionTitle } from "./shared";

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
          <tr>
            <td>Welcome</td>
            <td>{renderCount("welcome")}</td>
            <td>Menu</td>
            <td>{renderCount("menu")}</td>
          </tr>
          <tr>
            <td>How to Play</td>
            <td>{renderCount("how_to_play")}</td>
            <td>Training</td>
            <td>{renderCount("training")}</td>
          </tr>
          <tr>
            <td>Modding</td>
            <td>{renderCount("modding")}</td>
            <td>Story (Auto)</td>
            <td>{renderCount("arcade_story")}</td>
          </tr>
          <tr>
            <td>Story (Easy)</td>
            <td>{renderCount("arcade_easy")}</td>
            <td>Story (Hard)</td>
            <td>{renderCount("arcade_hard")}</td>
          </tr>
          <tr>
            <td>Local Versus</td>
            <td>{renderCount("vs_local")}</td>
            <td>Versus CPU</td>
            <td>{renderCount("vs_cpu")}</td>
          </tr>
          <tr>
            <td>Ranked Match</td>
            <td>{renderCount("online_ranked")}</td>
            <td>Casual Match</td>
            <td>{renderCount("online_casual")}</td>
          </tr>
          <tr>
            <td>Private Match</td>
            <td>{renderCount("online_private")}</td>
            <td>Private Lobby</td>
            <td>{renderCount("online_lobby")}</td>
          </tr>
          <tr>
            <td>Replay</td>
            <td>{renderCount("replay")}</td>
            <td>Account Login</td>
            <td>{renderCount("online_account")}</td>
          </tr>
          <tr>
            <td>Frame Data</td>
            <td>{renderCount("frame_data")}</td>
            <td>Debug Ref</td>
            <td>{renderCount("debug_ref")}</td>
          </tr>
          <tr>
            <td>Account Stats</td>
            <td>{renderCount("online_stats")}</td>
            <td>Leaderboard</td>
            <td>{renderCount("online_leaderboard")}</td>
          </tr>
          <tr>
            <td>About</td>
            <td>{renderCount("about")}</td>
            <td>Hall of Fame</td>
            <td>{renderCount("hall_of_fame")}</td>
          </tr>
        </tbody>
      </DataTable>
    </DataSection>
  );
}
