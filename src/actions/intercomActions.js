import {INTERCOM_APP_ID} from '../constants/credentials';

export const activateIntercom = user => {
  if (user.success) {
    Intercom('boot', {
      app_id: INTERCOM_APP_ID,
      email: user.email,
      user_id: user.user.id,
      user_hash: user.intercom_user_hash,
      role: user.role,
      contact_number: user.contact_number,
      listing_count: user.listing_count,
      last_order_at: user.last_order_at,
      wishlist_count: user.wishlist_count,
      address: user.address,
      from_mobile: user.from_mobile,
      created_at: Math.round(Date.now() / 1000),
      widget: {
      activator: '#intercom'
    }
   });
   Intercom('show');
  }
};
