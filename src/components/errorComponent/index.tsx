// ErrorComponent.tsx
"use client";

import { type ErrorBoundaryProps } from "next/dist/client/components/error-boundary";
import Error from "next/error";
import FullPageText from "../fullPageText";


type Props = {
  error: Error;
  reset?: () => void | undefined;
};

const ErrorComponent: React.FC<Props> = ({ error, reset }) => {
  return (
    <FullPageText text="Une erreur s'est produite. Veuillez contacter votre dev ;)" />
  );
}

export default ErrorComponent