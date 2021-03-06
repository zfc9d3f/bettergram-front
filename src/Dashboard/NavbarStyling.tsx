import styled from "styled-components";

export const SettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #e0e5eb;
    user-select: none;
`;

export const SettingsItem = styled.div`
    padding: 0.5rem 0.7rem;
    font-size: 1.3rem;
    cursor: pointer;
    transition-duration: 250ms;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1.5rem;
    &:hover .arrow {
        transition-duration: 250ms;
        color: #ffa556;
    }
`;

export const SettingsItemDelete = styled(SettingsItem)`
    color: #ff7575;
    position: relative;
    overflow: hidden;
`;

export const SettingsDeleteConfirm = styled(SettingsItem)`
    position: relative;
    overflow: hidden;
    height: 3rem;
`;

export const SettingsDeleteConfirmButton = styled.div<{ confirm: boolean }>`
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #ff7575;
    border-radius: 4px;
    color: ${p => (p.confirm ? "#333e4d" : "#ff7575")};
    background-color: ${p => (p.confirm ? "#ff7575" : "#333e4d")};
`;

export const SettingsItemVerification = styled(SettingsItem)`
    cursor: default;
    text-align: center;
    font-size: 1rem;
    color: #ffa556;
`;

export const SettingsTitle = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e0e5eb;
    align-items: center;
`;

export const SettingsTitleTitle = styled.div`
    padding: 0.7rem;
    font-size: 1.5rem;
`;

export const SettingsExit = styled.div`
    padding: 0.3rem 1rem;
    font-size: 1.9rem;
    cursor: pointer;
    transition-duration: 300ms;
    &:hover {
        transform: rotate(90deg);
        color: #ff7575;
    }
`;

export const NavBarInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NavBarInput = styled.input`
    margin-bottom: 1rem;
    padding: 0.5rem 0.4rem;
    margin-right: 1rem;
    width: 17rem;
    box-sizing: border-box;
    border: none;
    background-color: #333e4d;
    color: #e0e5eb;
    outline: none;
    box-shadow: 5px 5px 0px rgba(102, 124, 153, 0.7);
    font-size: 1.1rem;
    border-radius: 4px;
    &:hover {
        transition-duration: 200ms;
        transform: translate(-2px, -2px);
        box-shadow: 9px 9px 0px rgba(102, 124, 153, 0.8);
        background-color: #202730;
    }

    &::placeholder {
        color: #e0e5eb;
    }

    &:focus {
        background-color: #e0e5eb;
        color: #202730;
        transition-duration: 250ms;
        transform: translate(-2px, -2px);
        box-shadow: 9px 9px 0px rgba(102, 124, 153, 0.7);

        &::placeholder {
            color: #202730;
        }
    }
`;

export const NavBarSubmitButton = styled.button`
    border: none;
    outline: none;
    padding: 0.5rem;
    background-color: #333e4d;
    color: #e0e5eb;
    font-size: 1.2rem;
    width: 11rem;
    border-radius: 4px;
    box-shadow: 5px 5px 0px rgba(102, 124, 153, 0.7);
    cursor: pointer;

    &:hover {
        transition-duration: 200ms;
        transform: translate(-2px, -2px);
        box-shadow: 9px 9px 0px rgba(102, 124, 153, 0.8);
        background-color: #202730;
    }

    &:active {
        transition-duration: 100ms;
        transform: translate(2px, 2px);
        box-shadow: 1px 1px 0px rgba(102, 124, 153, 0.8);
    }

    @media only screen and (max-width: 700px) {
        padding: 1rem 0.5rem;
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 10rem;
`;

export const Email = styled.form`
    height: 16rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

export const PasswordDropDown = styled.form`
    height: 20rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;
