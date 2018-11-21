import styled from 'react-emotion';
import { Text } from 'spectacle';
import theme from '../theme';

const ShadowText = styled(Text)`
    text-shadow: 0px 0px 10px ${theme.screen.colors.primary};
`;

export default ShadowText;
