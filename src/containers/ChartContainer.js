import { connect } from 'react-redux';
import ChartWrapper from '../components/ChartWrapper';

const mapDispatchToProps = (dispatch) => {
    return {};
};

const mapStateToProps = ({ story }) => ({ 
    stories: story.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartWrapper);
