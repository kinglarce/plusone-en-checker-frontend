import React, { FC } from "react";
import { Button, Spinner } from "reactstrap";
import classnames from "classnames";

interface LoadingButtonProps {
  children: React.ReactNode;
  loading: boolean;
}

export const LoadingButton: FC<LoadingButtonProps> = ({ children, loading, ...rest }) => (
  <Button {...rest} color="primary">
    {loading && (
      <Spinner
        className={classnames({
          "position-relative": true,
          visible: loading,
          invisible: !loading,
        })}
        size='sm'
        // type="grow"
      />
    )}
    {!loading && (
      <span
        className={classnames({
          invisible: loading,
          visible: !loading,
          "span-style": true,
        })}
      >
        {children}
      </span>
    )}
  </Button>
);
