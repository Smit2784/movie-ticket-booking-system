export default function reportWebVitals(cb){
  if (cb && cb instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(cb);
      getFID(cb);
      getFCP(cb);
      getLCP(cb);
      getTTFB(cb);
    });
  }
}
