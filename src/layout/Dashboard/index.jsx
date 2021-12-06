import styled from 'styled-components';
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader"
import GetUser from "../../services/users";

const DashboardContainer = styled.div`
  width: 80%;
  margin-left: 70px;
`

const Dashboard = () => {
    // const number = () => {
    //     return Math.floor(Math.random() * 20)
    // }
    return (
        <DashboardContainer>
            <DashboardHeader/>
            <GetUser/>
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