import * as React from 'react';
import {FC} from "react";

const TitleBar: FC = () => (
    <div className="row">
      <div className="col-lg-12">
        <div className="bs-component">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a style={{fontFamily: 'helvetica'}} className="navbar-brand" href="#">The best quiz creator ever!</a>
          </nav>
        </div>
      </div>
    </div>
  );

export default TitleBar;