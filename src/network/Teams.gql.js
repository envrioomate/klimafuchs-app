import gql from 'graphql-tag'

export const CREATE_TEAM = gql`
    mutation createTeam($name:String!, $avatarId:Int) {
        createTeam(team: {teamName:$name, mediaId:$avatarId}) {
            id,
            name,
            inviteId,
            avatar{
                filename            },
            members {
                id,
                user {
                    id,
                    screenName,
                    avatar {
                        filename                    }
                },
                dateCreated,
                isActive,
                activationDate,
                isAdmin
            },
            score
        }
    }
`;

export const MY_MEMBERSHIPS = gql`
    query {
        myMemberships{
            id,
            team {
                id,
                name,
                avatar {
                    filename,
                }
                score
            },
            isActive,
            isAdmin
        }
    }
`;

export const GET_MY_TEAM = gql`
    query ($teamId:Int!){
        getMyTeam(teamId:$teamId){
            id,
            name,
            members {
                user {
                    avatar {
                        path,
                    }
                    screenName,
                }
                isActive,
                isAdmin
            },
            score,
            avatar {
                path,
            }
        }
    }
`;

export const REQUEST_JOIN_TEAM = gql`
    mutation ($teamId:Int!){
        requestJoinTeam(teamId:$teamId) {
            id
        }
    }
`;

export const CONFIRM_MEMBER = gql`
    mutation ($membershipId:Int!) {
        confirmMember(membershipId:$membershipId) {
            id
        }
    }
`;

export const LEADERBOARD = gql`
    query getLeaderBoard($connectionArgs:ConnectionArgs!, $teamSize:TeamSize! ) {
        getLeaderBoard(connectionArgs:$connectionArgs, teamSize:$teamSize ) {
            page {
                edges {
                    node {
                        id,
                        name,
                        score,
                        avatar{filename},
                        teamSize
                    }
                    cursor
                }
            }
        }

    }

`;

export const TeamSize = {
    SOLO: 0,
    DUO: 1,
    SMALL: 2,
    LARGE: 3,
    HUGE: 4,
};