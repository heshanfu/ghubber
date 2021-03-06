// @author Dmitry Patsura <talk@dmtry.me> https://github.com/ovr
// @flow

import { NavigationActions } from 'react-navigation';
import { NAVIGATION_SET_TITLE, SIDEMENU_OPEN, SIDEMENU_CLOSE } from 'constants';
import { setupRepository } from './repository';

// import flow types
import type { RepositoryEntity } from 'github-flow-js';

export function showAccount(): ThunkAction {
    return (dispatch, getState) => {
        const app = getState().app;

        dispatch(showProfile(app.user.login));
    };
}

export function showFeedSettings() {
    return NavigationActions.navigate({
        routeName: 'FeedSettings',
    });
}

export function showOAuth() {
    return NavigationActions.navigate({
        routeName: 'OAuth',
    });
}

export function showSideMenu() {
    return {
        type: SIDEMENU_OPEN
    };
}

export function hideSideMenu() {
    return {
        type: SIDEMENU_CLOSE
    };
}

export function showAccountIssues() {
    return NavigationActions.navigate({
        routeName: 'AccountIssues',
    });
}

export function showAccountPullRequests() {
    return NavigationActions.navigate({
        routeName: 'AccountPullRequests',
    });
}

export function showAccountNotifications() {
    return NavigationActions.navigate({
        routeName: 'AccountNotifications',
    });
}

export function showThemeSelect() {
    return NavigationActions.navigate({
        routeName: 'ThemeSelect',
    });
}

export function showSettings() {
    return NavigationActions.navigate({
        routeName: 'Settings',
    });
}

export function showAbout() {
    return NavigationActions.navigate({
        routeName: 'AboutScreen',
    });
}

export function showProfile(id: string) {
    return NavigationActions.navigate({
        routeName: 'Profile',
        params: {
            id
        }
    });
}

export function showLogin() {
    return {
        type: 'Navigation/RESET',
        index: 0,
        actions: [{
            type: 'Navigation/NAVIGATE',
            routeName:'Login'
        }]
    };
}

export function showHome() {
    return {
        type: 'Navigation/RESET',
        index: 0,
        actions: [{
            type: 'Navigation/NAVIGATE',
            routeName:'Home'
        }]
    };
}

// @todo Not working!
export function setTitle(title: string) {
    return {
        type: NAVIGATION_SET_TITLE,
        payload: title
    };
}

export function showRepositoryIssue(owner: string, repo: string, number: number) {
    return NavigationActions.navigate({
        routeName: 'Issue',
        params: {
            owner,
            repo,
            number
        }
    });
}

export function showRepositoryPullRequest(owner: string, repo: string, number: number) {
    return NavigationActions.navigate({
        routeName: 'PullRequest',
        params: {
            owner,
            repo,
            number
        }
    });
}

export function showRepositoryCommit(owner: string, repo: string, sha: string) {
    return NavigationActions.navigate({
        routeName: 'Commit',
        params: {
            owner,
            repo,
            sha
        }
    });
}

export function showRepositoryByParams(owner: string, repo: string) {
    return NavigationActions.navigate({
        routeName: 'Repository',
        params: {
            owner,
            repo
        }
    });
}

export function showRepository(repository: RepositoryEntity): ThunkAction {
    return dispatch => {
        dispatch(setupRepository(repository));

        dispatch(
            NavigationActions.navigate({
                routeName: 'Repository',
                params: {
                    owner: repository.owner.login,
                    repo: repository.name
                }
            })
        );
    };
}
