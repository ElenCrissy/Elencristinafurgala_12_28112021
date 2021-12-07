import styled from 'styled-components';
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import KpiInfos from "../../components/DashboardComponents/Kpi/kpiInfos"
import GetKpi from "../../services/kpi";

const DashboardContainer = styled.div`
  width: 80%;
  margin-left: 70px;
`

const Kpi = styled.div`
  width: 300px;
height: 100%;
`

const Dashboard = () => {
   const kpi = GetKpi()
    let hi =[]
   for(let el in kpi){
       const yo = el
       const ya = kpi[el]
       const yi = (<KpiInfos element={yo} number={ya}/>)
       hi.push(yi)
   }

    return (
        <DashboardContainer>
            <DashboardHeader/>
            {/*<DailyActivities/>*/}
            <div>
                {/*<SessionDuration/>*/}
                {/*<Radar/>*/}
                {/*<Score/>*/}
            </div>
            <Kpi>
                {hi}
            </Kpi>
        </DashboardContainer>
    )
}

export default Dashboard;