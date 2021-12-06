import styled from 'styled-components';
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader"
import GetUserFirstName from "../../services/users";

const DashboardContainer = styled.div`
  width: 80%;
  margin-left: 70px;
`

const Dashboard = () => {
    return (
        <DashboardContainer>
            <DashboardHeader/>
            <GetUserFirstName/>
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