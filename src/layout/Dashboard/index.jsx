import styled from 'styled-components';
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import KpiComponent from "../../components/DashboardComponents/Kpi/kpiComponent"
import useKpi from "../../services/kpi";
import useActivity from "../../services/activity";
import usePerf from "../../services/performance";
import useSessions from "../../services/sessions";
import useScore from "../../services/score";
import DailyInfo from "../../components/DashboardComponents/DailyActivities";
import SessionDuration from "../../components/DashboardComponents/SessionDuration";
import RadarGraph from "../../components/DashboardComponents/Radar";
import Score from "../../components/DashboardComponents/Score";
import PropTypes from "prop-types";

const DashboardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 97%;
`

const DetailsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const Graphs = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const SmallGraphs = styled.div`
  display: flex;
  justify-content: space-between;
`

const KpiElements = styled.div`
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

/**
 * Returns DOM element of the Dashboard
 * @param { Object } props
 * @param { Number } props.userId
 * @return { JSX.Element }
 */

const Dashboard = (props) => {
   const kpi = useKpi(props.userId)
    let kpiDOMArray =[]
    for(let i in kpi){
       const name = i
       const value = kpi[i]
       const kpiDOM = (<KpiComponent kpiName={name} kpiValue={value}/>)
       kpiDOMArray.push(kpiDOM)
    }
    const scoreData = useScore(props.userId)
    return (
        <DashboardContainer>
            <DashboardHeader userId={props.userId}/>
            <DetailsContainer>
                <Graphs>
                    <DailyInfo data={useActivity(props.userId)}/>
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