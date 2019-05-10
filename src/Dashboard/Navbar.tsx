import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faImages,
    faSignOutAlt,
    faTimes,
    faUserCog
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { animated, useSpring } from "react-spring";
import {
    NavBar,
    NavBarContainer,
    NavigationContainer,
    NavigationIcon
} from "./DashboardStyled";
import {
    SettingsContainer,
    SettingsExit,
    SettingsItem,
    SettingsTitle,
    SettingsTitleTitle
} from "./NavbarStyling";

library.add(faUserCog, faSignOutAlt, faImages, faTimes);

interface Props {}

export const Navigation: React.FC<Props> = () => {
    const [toggle, setToggle] = React.useState<boolean>(false);
    const navSlideout = useSpring({
        width: "20rem",
        backgroundColor: "#333e4d",
        height: "100vh",
        position: "absolute",
        top: "0%",
        left: "0%",
        transform: toggle ? "translateX(5rem)" : "translateX(-15rem)"
    });

    const onClickToggle = () => {
        setToggle(!toggle);
    };

    return (
        <NavBarContainer>
            <NavBar>
                <NavigationContainer>
                    <NavigationIcon onClick={onClickToggle}>
                        <FontAwesomeIcon icon="user-cog" />
                    </NavigationIcon>
                    <NavigationIcon>
                        <FontAwesomeIcon icon="images" />
                    </NavigationIcon>
                    <NavigationIcon>
                        <FontAwesomeIcon icon="sign-out-alt" />
                    </NavigationIcon>
                </NavigationContainer>
            </NavBar>
            <animated.div style={navSlideout}>
                <SettingsContainer>
                    <SettingsTitle>
                        <SettingsTitleTitle>SETTINGS</SettingsTitleTitle>
                        <SettingsExit onClick={onClickToggle}>
                            <FontAwesomeIcon icon="times" />
                        </SettingsExit>
                    </SettingsTitle>
                    <SettingsItem>NON-VERIFIED ACCOUNT</SettingsItem>
                    <SettingsItem>UPDATE EMAIL</SettingsItem>
                    <SettingsItem>UPDATE PASSWORD</SettingsItem>
                    <SettingsItem>DELETE ACCOUNT</SettingsItem>
                </SettingsContainer>
            </animated.div>
        </NavBarContainer>
    );
};