import styled from 'react-emotion';
import asAnchor from './asAnchor';

const asNavAnchor = (AnchorType) => {
  const Anchor = asAnchor(AnchorType);

  const StyledNavAnchor = styled(Anchor)({
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '1.25',
  });
  return StyledNavAnchor;
};

export default asNavAnchor;
