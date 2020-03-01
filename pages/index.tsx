import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Index: React.FC<{}> = () => {
	return (
		<>
			<Jumbotron>
				<Container>
					<h1>Hello, world!</h1>
					<p>
						This is a simple hero unit, a simple jumbotron-style
						component for calling extra attention to featured
						content or information.
					</p>
					<p>
						<Button variant="primary">Learn more</Button>
					</p>
				</Container>
			</Jumbotron>
		</>
	);
};

export default Index;
