import browserEnv from 'browser-env';

browserEnv();

test('that it renders a notification', t => {
    let n = new Vue(Notification).$mount();
    t.truthy(n);
});