import styled from 'styled-components';
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import Index from "../../components/DashboardComponents/Kpi"
import useKpi from "../../services/kpi";
import useActivity from "../../services/activity";
import usePerf from "../../services/performance";
import useSessions from "../../services/sessions";
import useScore from "../../services/score";
import DailyInfo from "../../components/DashboardComponents/DailyActivities";
import SessionDuration from "../../components/DashboardComponents/SessionDuration";
import RadarGraph from "../../components/DashboardComponents/Radar";
import Score from "../../components/DashboardComponents/Score";

const DashboardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`

const DetailsContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Graphs = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`

const SmallGraphs = styled.div`
  display: flex;
  justify-content: space-between;
`

const Kpi = styled.div`
  width: 18%;
  height: 100%;
`

const Dashboard = (props) => {
   const kpi = useKpi(props.userId)
    let kpiDOMArray =[]
    for(let i in kpi){
       const name = i
       const value = kpi[i]
       const kpiDOM = (<Index kpiName={name} kpiValue={value}/>)
       kpiDOMArray.push(kpiDOM)
    }

    const sessionData = useSessions(props.userId)
    const scoreData = useScore(props.userId)
    return (
        <DashboardContainer>
            <DashboardHeader userId={props.userId}/>
            <DetailsContainer>
                <Graphs>
                    <DailyInfo data={useActivity(props.userId)}/>
                    <SmallGraphs>
                        {sessionData === null || sessionData === undefined ?
                            null : <SessionDuration data={sessionData.sessions}/>}
                        <RadarGraph data={usePerf(props.userId)}/>
                        {scoreData === null || scoreData === undefined ? null : <Score data={scoreData.score}/>}
                    </SmallGraphs>
                </Graphs>
                <Kpi>
                    {kpiDOMArray}
                </Kpi>
            </DetailsContainer>
        </DashboardContainer>
    )

}

export default Dashboard;