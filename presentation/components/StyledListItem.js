import styled from 'react-emotion';
import { ListItem } from 'spectacle';

const StyledListItem = styled(ListItem)`
    font-size: 33px;
    font-weight: 500;
    text-align: left;
    margin-top: 100px;

    &:first-child {
        margin-top: 0;
    }
`;

export default StyledListItem;
