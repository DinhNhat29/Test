const mapping = {
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
    'Locket': ['Gold']
  };
  
  var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";var dinhnhat29={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-18T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2024-01-29T01:04:18Z",purchase_date:"2024-01-29T01:04:17Z",store:"app_store"},ahihi001={grace_period_expires_date:null,purchase_date:"2024-01-29T01:04:17Z",product_identifier:"com.dinhnhat29.premium.yearly",expires_date:"2099-12-18T01:04:17Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(ahihi001.product_identifier=s,obj.subscriber.subscriptions[s]=dinhnhat29):obj.subscriber.subscriptions["com.dinhnhat29.premium.yearly"]=dinhnhat29,obj.subscriber.entitlements[e]=ahihi001}else obj.subscriber.subscriptions["com.dinhnhat29.premium.yearly"]=dinhnhat29,obj.subscriber.entitlements.pro=ahihi001;$done({body:JSON.stringify(obj)});
  
