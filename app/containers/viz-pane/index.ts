import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getValForKeyAction } from '../../actions/query';
import { AppState } from '../../reducers/types';
// eslint-disable-next-line import/no-cycle
import VizPane from './VizPane';

export const mapStateToProps = ({ queryState, connectionState }: AppState) => {
  const { resultData } = queryState;
  const { activeConnection } = connectionState;

  return {
    resultData,
    activeConnection
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getValForKeyAction
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(VizPane);
