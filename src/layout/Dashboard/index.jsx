import styled from 'styled-components';
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import Index from "../../components/DashboardComponents/Kpi"
import useKpi from "../../services/kpi";
import useActivity from "../../services/activity";
import usePerf from "../../services/performance";
import DailyInfo from "../../components/DashboardComponents/DailyActivities";
import RadarGraph from "../../components/DashboardComponents/Radar";

const DashboardContainer = styled.div`
  width: 80%;
  margin-left: 70px;
`

const DetailsContainer = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-between;
`

const Graphics = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Kpi = styled.div`
  width: 20%;
  height: 100%;
`

const Dashboard = () => {
   const kpi = useKpi()
    let kpiDOMArray =[]
   for(let i in kpi){
       const name = i
       const value = kpi[i]
       const kpiDOM = (<Index kpiName={name} kpiValue={value}/>)
       kpiDOMArray.push(kpiDOM)
   }

    return (
        <DashboardContainer>
            <DashboardHeader/>
            <DetailsContainer>
                <Graphics>
                    <DailyInfo data={useActivity()}/>
                    <div>
                        {/*<SessionDuration/>*/}
                        <RadarGraph data={usePerf()}/>
                        {/*<Score/>*/}
                    </div>
                </Graphics>
                <Kpi>
                    {kpiDOMArray}
                </Kpi>
            </DetailsContainer>
        </DashboardContainer>
    )
}

export default Dashboard;