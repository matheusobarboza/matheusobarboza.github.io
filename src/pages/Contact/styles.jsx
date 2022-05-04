import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  background-color: #0f1020;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Breve = styled(motion.span)`
  font-family: "League Spartan", sans-serif;
  font-weight: 500;
  font-size: 3rem;
  color: #fff;
`;