import Route from '@ember/routing/route';
import bugsnag from 'bugsnag';

// var bugsnagClient = bugsnag('94069bddc8658172f92a74e80660fa3a')

export default Route.extend({
  setupController: function(controller, error) {

    console.log('top level error', error)
    // // the simple way of doing it won't actually show any details of the error
    // bugsnag.notify(error)

    if (error.errors) {
      error.errors.forEach((e) => {
        console.log('each error', e);

        bugsnag.notify(e);

        // // this doesn't make a difference
        // bugsnag.notify({
        //   ...e,
        // });
      });
    } else {
      bugsnag.notify(error)
    }

    this._super(...arguments);
  }
});
