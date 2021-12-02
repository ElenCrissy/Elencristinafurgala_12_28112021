import styled from 'styled-components';
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader"
import GetUsers from "../../services/users";

const DashboardContainer = styled.div`
  width: 80%;
  margin-left: 70px;
`

function Dashboard(){
    GetUsers()
    return (
        <DashboardContainer>
            <DashboardHeader/>
            {/*<DailyActivities/>*/}
            <div>
                {/*<SessionDuration/>*/}
                {/*<Radar/>*/}
                {/*<Score/>*/}
            </div>
            <div>
            {/*    map pour details     */}
            </div>
        </DashboardContainer>
    )
}

export default Dashboard;