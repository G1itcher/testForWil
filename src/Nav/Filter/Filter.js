import React from 'react';
import './Filter.css';

const Filter = (props) => {
	return (
		<details className="Filter"><summary><img src="https://icon-library.net/images/filter-png-icon/filter-png-icon-13.jpg" alt="Filter symbol" />Filter</summary>
			<form>
				<fieldset>
					<div>
						<label target="minimum-time">At least</label>
						<input type="time" name="minimum-time" id="minimum-time" />
					</div>

					<legend>Duration</legend>

					<div>
						<label target="maximum-time">At most</label>
						<input type="time" name="maximum-time" id="maximum-time" />
					</div>
				</fieldset>

				<fieldset>
					<div>
						<label target="minimum-date">Not before</label>
						<input type="date" name="minimum-date" id="minimum-date" format="ddd d mmm yyyy" />
					</div>

					<legend>Publication</legend>

					<div>
						<label target="maximum-date">Not after</label>
						<input type="date" name="maximum-date" id="maximum-date" />
					</div>
				</fieldset>
			</form>
		</details>
	)
};

export default Filter;