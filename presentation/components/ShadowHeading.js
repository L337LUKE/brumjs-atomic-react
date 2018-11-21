import styled from 'react-emotion';
import { Heading } from 'spectacle';
import theme from '../theme';

const ShadowedHeading = styled(Heading)`
    text-shadow: 0px 0px 10px ${theme.screen.colors.primary};
`;

export default ShadowedHeading;
