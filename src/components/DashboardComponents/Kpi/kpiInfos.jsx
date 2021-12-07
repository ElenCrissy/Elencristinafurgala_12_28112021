import styled from "styled-components";
import GetKpi from "../../../services/kpi";

const KpiContainer = styled.div`
  width: 200px;
  height: 80px;
  background-color: #FBFBFB;
  border-radius: 25px;
  margin-bottom: 20px;
`
const KpiWrapper = styled.div`

`

const KpiInfos = (props) => {

    return(
        <KpiContainer>
            <img alt=""/>
            <KpiWrapper>
                Hello
            </KpiWrapper>
        </KpiContainer>
    )

}

export default KpiInfos