import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, FormHelperText } from '@mui/material';

export default function CategorySelectField({
  name,
  label,
  value,
  error,
  onChange,
}) {
  return (
    <FormControl fullWidth error={error} size='small'>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        native
        id={name}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        required
        fullWidth>
        <option aria-label='None' value='' />
        <optgroup label='Rent & Utilities'>
          <option value='Rent'>Rent</option>
          <option value='Electricity'>Electricity</option>
          <option value='Water'>Water</option>
          <option value='Gas'>Gas</option>
          <option value='Internet'>Internet</option>
          <option value='Trash Collection'>Trash Collection</option>
          <option value='Cable TV/Streaming Services'>
            Cable TV/Streaming Services
          </option>
        </optgroup>

        <optgroup label='Groceries & Household Items'>
          <option value='Groceries'>Groceries</option>
          <option value='Cleaning Supplies'>Cleaning Supplies</option>
          <option value='Toiletries'>Toiletries</option>
          <option value='Kitchen Supplies'>Kitchen Supplies</option>
          <option value='Household Items (e.g., light bulbs, batteries)'>
            Household Items (e.g., light bulbs, batteries)
          </option>
        </optgroup>

        <optgroup label='Dining & Takeout'>
          <option value='Restaurants'>Restaurants</option>
          <option value='Takeout/Delivery'>Takeout/Delivery</option>
          <option value='Coffee'>Coffee</option>
          <option value='Bars/Alcohol'>Bars/Alcohol</option>
        </optgroup>

        <optgroup label='Transportation'>
          <option value='Public Transportation (bus, subway)'>
            Public Transportation (bus, subway)
          </option>
          <option value='Gasoline'>Gasoline</option>
          <option value='Ride-sharing (Uber, Lyft)'>
            Ride-sharing (Uber, Lyft)
          </option>
          <option value='Parking'>Parking</option>
          <option value='Car Maintenance'>Car Maintenance</option>
        </optgroup>

        <optgroup label='Entertainment & Recreation'>
          <option value='Movies & Concerts'>Movies & Concerts</option>
          <option value='Sports & Activities'>Sports & Activities</option>
          <option value='Subscriptions (e.g., Netflix, Spotify)'>
            Subscriptions (e.g., Netflix, Spotify)
          </option>
          <option value='Tickets (amusement parks, events)'>
            Tickets (amusement parks, events)
          </option>
        </optgroup>

        <optgroup label='Travel & Accommodation'>
          <option value='Flights'>Flights</option>
          <option value='Hotels'>Hotels</option>
          <option value='Car Rentals'>Car Rentals</option>
          <option value='Travel Insurance'>Travel Insurance</option>
          <option value='Taxis/Ride Shares'>Taxis/Ride Shares</option>
        </optgroup>

        <optgroup label='Shopping'>
          <option value='Clothing'>Clothing</option>
          <option value='Electronics'>Electronics</option>
          <option value='Furniture'>Furniture</option>
          <option value='Home Decor'>Home Decor</option>
        </optgroup>

        <optgroup label='Health & Fitness'>
          <option value='Gym Membership'>Gym Membership</option>
          <option value='Fitness Classes'>Fitness Classes</option>
          <option value='Supplements'>Supplements</option>
          <option value='Medical Bills'>Medical Bills</option>
          <option value='Health Insurance'>Health Insurance</option>
        </optgroup>

        <optgroup label='Gifts & Special Occasions'>
          <option value='Birthday Gifts'>Birthday Gifts</option>
          <option value='Wedding Gifts'>Wedding Gifts</option>
          <option value='Holidays (e.g., Christmas, Thanksgiving)'>
            Holidays (e.g., Christmas, Thanksgiving)
          </option>
        </optgroup>

        <optgroup label='Miscellaneous'>
          <option value='Pet Expenses (food, grooming)'>
            Pet Expenses (food, grooming)
          </option>
          <option value='Childcare/Babysitting'>Childcare/Babysitting</option>
          <option value='Subscriptions/Apps'>Subscriptions/Apps</option>
          <option value='Donations'>Donations</option>
        </optgroup>
      </Select>
      {error && <FormHelperText>{label} is required</FormHelperText>}
    </FormControl>
  );
}

CategorySelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

CategorySelectField.defaultProps = {
  error: false,
};
