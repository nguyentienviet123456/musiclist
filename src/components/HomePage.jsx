import React from 'react';
import Sidebar from './shared/Sidebar';
import { Button } from 'reactstrap';

export default function HomePage() {
  const showAlert = () => {
    alert('You clicked the button . Well done, Viet !');
  };

  return (
    <section className="page-content">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <p>This is the home page.</p>
          <p>
            here is your enjoyment is a button:
          </p>
          <Button className="btn btn-success" onClick={showAlert}>Click Me</Button>
        </div>
        <Sidebar />
      </div>
    </section>
  );
}
