import React from "react";
import { Platform } from "react-native";

import { DevTools } from "./DevTools";
import colors from "../constants/colors";
import Button from "../Button";
import Dialog from "../Dialog";
import { useMusic } from "../Music";

const Menu = ({
  moves,
  backToMainMenu,
  hide,
  isVisible,
  player,
  scrollToCenter,
}) => {
  const music = useMusic();
  return (
    <Dialog
      player={player}
      isVisible={isVisible}
      hide={hide}
      style={{ maxWidth: 360 }}
    >
      {Platform.OS !== "web" && music && (
        <Button
          onPress={() => music?.setPaused(!music?.paused)}
          style={{ marginBottom: 24 }}
        >
          {music?.paused ? "音楽ON" : "音楽OFF"}
        </Button>
      )}
      <Button
        color={colors.greenLight}
        onPress={() => {
          scrollToCenter();
          hide();
        }}
        style={{ marginBottom: 24 }}
      >
        中央に戻る
      </Button>
      <Button
        color={colors.redLight}
        onPress={backToMainMenu}
        style={{ marginBottom: 24 }}
      >
        ホームに戻る
      </Button>
      <Button color="#fff" onPress={hide}>
        ゲームに戻る
      </Button>

      <DevTools moves={moves} />
    </Dialog>
  );
};

export default Menu;
