import {
  DELETE_REPORT,
  CREATE_REPORT_PAGE_TWO,
  CREATE_REPORT_IMAGE,
  CREATE_REPORT_PAGE_ONE,
  CREATE_REPORT,
  CREATE_REPORT_ERROR,
  CREATE_REPORT_LOCATION
} from "../action/report";
import Report from "../../model/report";
import ReportPagOne from "../../model/reportPageOne";
import ReportPagTwo from "../../model/ReportPageTwo";
import Location from '../../model/locationModel'

initialState = {
  report: {}
};
export default report = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REPORT_IMAGE:
      const newImage = action.data;

      return {
        ...state,
        report: newImage
      };

    case CREATE_REPORT_LOCATION:
     console.log(action.data)
     const newLocation = action.data;

      return {
        ...state,
        report:state.report, newLocation
      };

    case CREATE_REPORT_PAGE_ONE:
      const pageOne = new ReportPagOne(
        action.data.info1,
        action.data.info2,
        action.data.info3,
        action.data.info4
      );

      return {
        ...state,
        report: state.report,
        pageOne
      };

    case CREATE_REPORT_PAGE_TWO:
      const pageTwo = new ReportPagTwo(action.data.info5, action.data.info6);

      return {
        ...state,
        report: state.report,
        pageTwo
      };

    case CREATE_REPORT:
      const newReport = new Report(
        new Date().toString(),
        action.data.report,
        action.data.location,
        action.data.pageOne.info1,
        action.data.pageOne.info2,
        action.data.pageOne.info3,
        action.data.pageOne.info4,
        action.data.pageTwo.info5,
        action.data.pageTwo.info6
      );

      return {
        ...state,
        report: newReport
      };
    default:
      return state;
  }
};
