import { Flex, Typo, Button, Icon } from '@components/common';
import { useGoogleOAuth } from '../hooks/useGoogleOAuth';

const FLEX_GAP_CONFIG = { x: '12px' };
const BUTTON_STYLE = { fontWeight: '300' };

export function SignInButton() {
  const { redirectToGoogleLogin } = useGoogleOAuth();

  return (
    <Button design="outlined" onClick={redirectToGoogleLogin}>
      <Flex alignItems="center" gap={FLEX_GAP_CONFIG}>
        <Icon.Social.Google />
        <Typo size="14px" color="gray" element="span" style={BUTTON_STYLE}>
          Sign up with Google
        </Typo>
      </Flex>
    </Button>
  );
}
