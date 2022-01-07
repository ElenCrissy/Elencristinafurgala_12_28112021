import styled from 'styled-components';
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import KpiComponent from "../../components/DashboardComponents/Kpi/kpiComponent"
import useKpi from "../../services/kpi";
import useActivity from "../../services/activity";
import usePerf from "../../services/performance";
import useSessions from "../../services/sessions";
import useScore from "../../services/score";
import DailyActivities from "../../components/DashboardComponents/DailyActivities";
import SessionDuration from "../../components/DashboardComponents/SessionDuration";
import RadarGraph from "../../components/DashboardComponents/RadarGraph";
import Score from "../../components/DashboardComponents/Score";
import PropTypes from "prop-types";

const DashboardContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  height: 97%;
`

const DetailsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`

const Graphs = styled.div`
    width: 78%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const SmallGraphs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const KpiElements = styled.div`
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Dashboard = (props) => {
    const kpi = useKpi(props.userId)
    const scoreData = useScore(props.userId)
    let kpiDOMArray =[]
    for(let i in kpi){
       const name = i
       const value = kpi[i]
       const kpiDOM = (<KpiComponent key={name} kpiName={name} kpiValue={value}/>)
       kpiDOMArray.push(kpiDOM)
    }
    return (
        <DashboardContainer>
            <DashboardHeader userId={props.userId}/>
            <DetailsContainer>
                <Graphs>
                    <DailyActivities data={useActivity(props.userId)}/>
                    <SmallGraphs>
                        <SessionDuration data={useSessions(props.userId)}/>
                        <RadarGraph data={usePerf(props.userId)}/>
                        {scoreData === null || scoreData === undefined ? null : <Score data={scoreData.score}/>}
                    </SmallGraphs>
                </Graphs>
                <KpiElements>
                    {kpiDOMArray}
                </KpiElements>
            </DetailsContainer>
        </DashboardContainer>
    )
}

Dashboard.propTypes = {
    userId: PropTypes.number
}

export default Dashboard;