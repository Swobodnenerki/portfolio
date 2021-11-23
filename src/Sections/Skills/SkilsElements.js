import styled from 'styled-components';
import { Title } from '../About/AboutElements';
export const TitleMargin = styled.div`
    margin-bottom: 50px;
`
export const EachSkillContainer = styled.div`
    position: relative;
    margin-bottom: 45px;
    margin-left: 60px;
    margin-right: 60px;
`
export const Principal = styled.div`
    display: inline-block;
    width: 100%;
    vertical-align: middle;
    min-width: 180px;
`
export const Info = styled.div`
    position: relative;
`
export const Name = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 15px;
    font-weight: 600;
    opacity: 0.9;
`
export const PercentageText = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    font-weight: normal;
`
export const ProgressBar = styled.div`
    position: relative;
    width: 100%;
    height: 7px;
    margin: 30px 0 2px;
    border-radius: 10px;
    background: rgba(0,0,0,0.5);
`
export const Percentage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 7px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #0bceaf;
`
export const ProffesionalContainer = styled.div`
    margin: 50px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* max-width: 450px;  */
    max-width: 550px;
`
export const EachProffesionalSkill = styled.div`
    flex-basis: 20%;
    margin: 10px 20px;
    width: 170px;
    height: 170px;
`
export const CircleContainer = styled.div`
    width: 120px;
`
export const ProffesionalSkillText = styled.div`
    text-align: center;


`