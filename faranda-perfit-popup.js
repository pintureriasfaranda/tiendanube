/* Faranda - estilo del cartel de suscripcion de Perfit (Marketing Nube). Se carga desde el sello del footer de Tiendanube. */
(function(){
  if (document.getElementById('far-op-css')) return;
  var st = document.createElement('style');
  st.id = 'far-op-css';
  st.textContent = `.p-layer .p-optin.far-op{max-width:880px!important;width:calc(100% - 32px)!important;border-radius:22px!important;overflow:hidden!important;box-shadow:0 24px 60px rgba(0,0,0,.28)!important;margin:60px auto!important}
.p-layer.p-opened{background:rgba(30,30,30,.45)!important}
.p-optin.far-op .p-body{padding:0!important;background:#fff!important}
.p-optin.far-op .p-grid{display:grid!important;grid-template-columns:1.05fr 1fr!important;grid-template-rows:none!important}
.p-optin.far-op .p-col-image{display:block!important;order:2;position:relative;min-height:460px;background-image:none!important;background-color:#fbf6ee!important;overflow:hidden}
.p-optin.far-op .p-col-form{order:1;padding:34px 36px 46px!important}
.far-op-art,.far-op-art svg{position:absolute;top:0;left:0;width:100%;height:100%}
.p-optin.far-op > div.p-close{top:14px!important;right:14px!important;width:34px!important;height:34px!important;border-radius:50%!important;background:#fff!important;font-size:24px!important;line-height:1!important;color:#444!important;box-shadow:0 2px 8px rgba(0,0,0,.18)!important;transition:transform .25s}
.p-optin.far-op > div.p-close:hover{transform:rotate(90deg)}

.far-op-flower{width:112px;height:112px;margin:0 auto 8px;cursor:pointer}
.far-op-flower svg{display:block;width:100%;height:100%;overflow:visible}
.far-op-spin,.far-op-pw,.far-op-petal{transform-box:view-box;transform-origin:540px 540px}
.far-op-spin{transition:transform 1.2s cubic-bezier(.22,1,.36,1)}
.far-op-flower:hover .far-op-spin{transform:rotate(45deg)}
.far-op-petal{animation:farOpBloom .75s cubic-bezier(.34,1.56,.64,1) both;animation-delay:calc(var(--d) * 80ms + 300ms)}
.far-op-pw{animation:farOpBreathe 3.2s ease-in-out infinite;animation-delay:calc(var(--d) * 400ms + 1.4s)}
@keyframes farOpBloom{from{transform:rotate(-70deg) scale(0);opacity:0}to{transform:none;opacity:1}}
@keyframes farOpBreathe{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}

.p-optin.far-op .p-body p.p-title{color:#0f9347!important;font-size:23px!important;font-weight:700!important;line-height:1.25!important;margin:4px 0 8px!important}
.p-optin.far-op .p-body p.p-text{color:#444!important;font-size:16px!important;line-height:1.4!important;margin:0 0 18px!important}
.p-optin.far-op .p-field{margin-bottom:12px!important}
.p-optin.far-op .p-field input[type='text']{font-size:16px!important;padding:12px 14px!important;border:1.5px solid #ddd!important;border-radius:12px!important;color:#333!important;outline:none;transition:border-color .2s,box-shadow .2s}
.p-optin.far-op .p-field input[type='text']:focus{border-color:#0f9347!important;box-shadow:0 0 0 4px rgba(15,147,71,.15)}
.p-optin.far-op .p-interests{margin:4px 0!important}
.p-optin.far-op button.p-submit{position:relative;overflow:hidden;border-radius:12px!important;padding:14px!important;font-size:18px!important;font-weight:700!important;color:#fff!important;background:#0f9347!important;box-shadow:0 6px 16px rgba(15,147,71,.3);transition:transform .2s,box-shadow .2s;filter:none}
.p-optin.far-op button.p-submit:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(15,147,71,.38)}
.p-optin.far-op button.p-submit::after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.45),transparent);transform:skewX(-20deg);animation:farOpShine 4.5s ease-in-out 2s infinite}
@keyframes farOpShine{0%{left:-60%}22%,100%{left:130%}}
.p-optin.far-op .p-body p.p-footer{font-size:13.5px!important;color:#555!important;text-align:center;margin:14px 0 0!important}
.p-optin.far-op .p-perfit-ad{left:0;right:auto;width:51.2%;bottom:12px}

.p-optin.far-op .p-title,.p-optin.far-op .p-text,.p-optin.far-op .p-field,.p-optin.far-op .p-submit,.p-optin.far-op .p-footer{animation:farOpUp .6s ease both}
.p-optin.far-op .p-title{animation-delay:.75s}.p-optin.far-op .p-text{animation-delay:.85s}
.p-optin.far-op .p-field,.p-optin.far-op .p-submit{animation-delay:.95s}.p-optin.far-op .p-footer{animation-delay:1.05s}
@keyframes farOpUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}

.p-optin.far-op .p-success{background:#fff;right:48.8%!important;margin:0!important;padding:30px;flex-direction:column;color:#333!important;font-size:18px!important;z-index:1}
.p-optin.far-op .p-success .far-op-flower{margin:0 auto 12px}

.far-op-stroke{fill:none;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:1;animation:farOpPaint 11s cubic-bezier(.65,.05,.3,1) infinite;animation-delay:calc(var(--d) * 140ms + 350ms)}
.far-op-bristle{stroke:#fff;stroke-opacity:.22}
@keyframes farOpPaint{0%{stroke-dashoffset:1;opacity:0}1%{opacity:1}9%{stroke-dashoffset:0}80%{stroke-dashoffset:0;opacity:1}90%{stroke-dashoffset:-1;opacity:1}91%,100%{stroke-dashoffset:-1;opacity:0}}

@media (max-width:720px){
  .p-layer .p-optin.far-op{margin:24px auto!important;border-radius:18px!important}
  .p-optin.far-op .p-grid{grid-template-columns:1fr!important}
  .p-optin.far-op .p-col-image{order:0;min-height:130px}
  .p-optin.far-op .p-col-form{padding:0 20px 40px!important}
  .p-optin.far-op .p-col-form > .far-op-flower{position:relative;z-index:1;width:104px;height:104px;margin:-52px auto 6px;padding:10px;background:#fff;border-radius:50%;box-shadow:0 6px 18px rgba(0,0,0,.15)}
  .p-optin.far-op .p-body p.p-title{font-size:20px!important}
  .p-optin.far-op .p-body p.p-text{font-size:15px!important}
  .p-optin.far-op .p-perfit-ad{width:100%}
  .p-optin.far-op .p-success{right:0!important;top:130px!important}
}
@media (prefers-reduced-motion:reduce){
  .far-op *,.far-op *::after{animation:none!important;transition:none!important}
  .far-op-stroke{stroke-dashoffset:0}
}
`;
  document.head.appendChild(st);
})();
(function(){
  var C = ['#f7bb14','#b2ca35','#0f9347','#065198','#662b7f','#97226c','#df1f2b','#ed8a21'];
  var P = [
'M527.5 121C534.7 120.3 544.4 120.3 551.6 121C558.8 121.7 564.7 123.2 570.8 125C576.9 126.9 582.3 129.1 588 132.1C593.8 135.2 599.6 138.6 605.3 143.4C611.1 148.1 618.1 155.2 622.6 160.7C627.2 166.1 629.5 169.4 632.9 176C636.2 182.6 640.6 192.6 643 200.2C645.3 207.8 646.3 214.3 647 221.4C647.7 228.5 648 233.4 647 242.6C646 251.8 643.6 266.1 641 276.8C638.3 287.5 634.9 297 630.9 306.9C626.9 316.8 621.9 327.1 616.9 336C611.8 344.9 606.3 353.2 600.7 360.3C595.1 367.4 588.7 373.8 583.4 378.6C578.1 383.4 574.3 386 569 388.9C563.7 391.7 557.3 394.1 551.5 395.5C545.8 396.8 540.3 397.6 534.4 397C528.5 396.4 522.5 394.9 516 391.9C509.6 388.8 501.9 383.9 495.7 378.6C489.4 373.4 483.9 367.4 478.3 360.3C472.7 353.2 467.2 345 462.2 336.1C457.1 327.2 452.1 316.8 448.1 306.9C444.1 297 440.7 287.3 438 276.8C435.4 266.2 433 252.8 432 243.6C431 234.4 431.3 228.6 432 221.4C432.7 214.2 433.7 207.8 436 200.2C438.4 192.6 442.8 182.6 446.1 176C449.5 169.4 451.7 166.2 456.3 160.7C460.9 155.3 467.9 148.1 473.7 143.4C479.4 138.6 485.2 135.2 491 132.1C496.7 129.1 502.1 126.9 508.2 125C514.3 123.2 520.2 121.7 527.5 121Z',
'M756.5 208C763.7 207.2 768 207.3 774.6 208C781.2 208.7 788.1 209.5 795.8 212.1C803.6 214.6 814.3 219.4 821 223.1C827.8 226.9 831.3 229.7 836.5 234.5C841.6 239.3 847 244.7 851.8 251.8C856.5 258.9 861.9 269.5 864.9 277.1C868 284.7 869 289.9 870 297.3C871 304.8 871.5 313.9 871 321.6C870.5 329.3 869.5 335.7 867 343.8C864.4 351.9 859.6 362.9 855.9 370C852.1 377.1 848.9 381.3 844.6 386.3C840.4 391.4 836.5 395.5 830.4 400.6C824.3 405.7 816.8 411.4 808.1 416.8C799.4 422.2 787.3 428.5 778 432.9C768.6 437.2 760 440.3 751.8 442.9C743.7 445.6 736.2 447.4 729 448.9C721.8 450.4 715.7 451.5 708.6 452C701.5 452.5 693.3 452.7 686.3 452C679.4 451.3 673.3 450.2 667.2 447.9C661 445.7 654.8 442.8 649.7 438.6C644.5 434.5 639.5 428.1 636.2 423.2C632.9 418.2 631.6 413.9 630 408.8C628.5 403.7 627.3 400.4 627 392.5C626.7 384.6 626.7 371.8 628 361.4C629.3 351 632 340.3 635 330.2C638.1 320.2 641.6 310.9 646.1 301C650.6 291.1 656.8 279.6 662.2 270.9C667.6 262.2 673.3 254.7 678.4 248.7C683.4 242.6 687.9 238.4 692.7 234.4C697.4 230.3 700.6 227.7 707 224.1C713.4 220.6 722.9 215.7 731.2 213.1C739.4 210.4 749.2 208.8 756.5 208Z',
'M836.5 432C844.9 431.2 849 431.2 856.6 432C864.1 432.8 874.4 434.8 881.8 437C889.2 439.2 894.8 441.7 901 445.1C907.3 448.5 912.9 451.5 919.5 457.5C926.1 463.4 935.5 473.7 940.7 480.8C946 487.9 948 492.3 950.9 500.1C953.8 507.9 956.8 518.8 958 527.3C959.2 535.9 958.8 543.8 958 551.6C957.2 559.3 955.3 566.9 952.9 573.8C950.6 580.8 946.9 587.7 943.8 593.1C940.8 598.5 939.5 601 934.6 606.4C929.6 611.9 920.8 620.7 914.2 625.8C907.6 630.9 902.2 633.7 895 636.9C887.7 640.1 877 643.3 870.7 645C864.5 646.7 863.4 646.7 857.5 647C851.7 647.3 841.5 647.3 835.5 647C829.5 646.7 828.2 646.3 821.5 645C814.8 643.7 804.6 641.8 795.2 639C785.8 636.1 773.8 631.6 765.1 627.9C756.4 624.2 750.6 621.4 742.9 616.8C735.2 612.3 726 606.4 718.7 600.7C711.5 595 704.2 587.7 699.4 582.4C694.6 577.1 692.9 574.1 690.1 569C687.4 563.9 684.4 557.7 683 551.7C681.7 545.8 681.5 539 682 533.4C682.5 527.8 683.2 524.1 686.1 518C689 511.9 694.7 502.7 699.3 496.7C703.9 490.8 708.1 487.1 713.7 482.4C719.2 477.6 724.3 473.4 732.8 468.2C741.4 463 757.1 455 765 451.1C772.9 447.3 773.3 447.4 780.2 445.1C787 442.7 796.9 439.2 806.3 437C815.7 434.8 828.1 432.8 836.5 432Z',
'M686.5 627C693.4 626.3 699.4 626 708.6 627C717.8 628 731.4 630.4 741.8 633C752.2 635.7 761.5 639.2 770.9 643.1C780.3 646.9 789 650.9 798 656.1C807.1 661.3 817.5 668.2 825.3 674.3C833 680.4 838.4 684.7 844.5 692.5C850.6 700.3 858.2 713.9 861.9 721C865.6 728.1 865.4 729.1 867 735.2C868.5 741.3 870.5 749.7 871 757.5C871.5 765.2 871.3 773.4 870 781.7C868.6 789.9 866 799.3 862.9 806.9C859.9 814.5 856 821.1 851.7 827.2C847.5 833.3 842.5 838.8 837.4 843.6C832.3 848.4 827.5 852.1 821.1 855.8C814.7 859.5 806.8 863.3 799 865.9C791.3 868.4 781.7 870.1 774.6 871C767.5 871.9 763.6 871.8 756.4 871C749.2 870.2 739.4 868.6 731.2 865.9C722.9 863.2 713.3 858.4 706.9 854.8C700.5 851.3 698.2 849.7 692.6 844.6C687 839.5 679.4 832 673.3 824.3C667.2 816.5 660.9 806.1 656.2 798.1C651.5 790 648.6 784.2 645.1 776C641.6 767.8 637.9 758.5 635 748.8C632.2 739.1 629.4 728 628 717.7C626.7 707.3 626.7 694.4 627 686.5C627.3 678.6 628.5 675.3 630 670.2C631.6 665.1 632.9 660.8 636.2 655.8C639.5 650.9 644.6 644.4 649.7 640.3C654.9 636.2 661 633.3 667.2 631.1C673.3 628.8 679.6 627.7 686.5 627Z',
'M533.5 682C539.6 681.7 548 682.2 554.8 684C561.6 685.9 567.1 688.3 574.1 693.2C581.1 698.1 591.1 707.9 596.5 713.5C602 719.1 603.4 721.9 606.7 726.8C610.1 731.7 612.3 734.1 616.9 743C621.4 751.9 629.8 769.6 633.9 780.2C638.1 790.7 639.8 796.9 642 806.3C644.2 815.7 646.2 827.9 647 836.5C647.8 845 647.7 850.5 647 857.6C646.3 864.6 645.3 871.2 643 878.8C640.6 886.4 636.2 896.4 632.9 903C629.5 909.6 627.1 913.1 622.6 918.3C618.2 923.6 612.4 929.8 606.3 934.7C600.2 939.6 591.9 944.6 586 947.9C580.1 951.1 577.5 952.3 570.8 954C564 955.7 552.8 957.3 545.5 958C538.3 958.7 534.1 958.8 527.3 958C520.6 957.1 512.3 955.5 505.1 952.9C497.8 950.4 490.6 947 483.8 942.8C477.1 938.6 469.7 932.4 464.6 927.6C459.5 922.8 457.1 919.9 453.2 914.2C449.3 908.4 444 898.9 441.1 893C438.2 887.1 437.6 884.7 436 878.8C434.5 872.9 432.7 864.8 432 857.5C431.3 850.3 431 844.6 432 835.4C433 826.2 435.4 812.8 438 802.2C440.7 791.7 444.1 782 448.1 772.1C452.1 762.2 457.1 751.8 462.2 742.9C467.2 734 472.6 726 478.3 718.7C484.1 711.5 490 704.8 496.7 699.4C503.3 693.9 511.9 689 518 686.1C524.2 683.2 527.3 682.3 533.5 682Z',
'M370.5 627C378.4 626.3 385.7 626.3 392.6 627C399.5 627.7 405.8 628.9 411.9 631.1C418 633.3 424.1 636.2 429.3 640.3C434.4 644.4 439.5 650.9 442.8 655.8C446.1 660.8 447.4 665.1 449 670.2C450.5 675.3 451.5 680.1 452 686.5C452.5 692.9 453 699.4 452 708.6C451 717.8 449 730.6 446 741.8C442.9 753 438.4 765.4 433.9 775.9C429.4 786.5 424.2 796.2 418.8 805.1C413.4 814 407 822.8 401.6 829.3C396.2 835.9 391.3 840.3 386.4 844.6C381.5 848.8 378.5 851.3 372 854.9C365.6 858.4 356 863.3 347.8 866C339.5 868.7 330.2 870.3 322.6 871C315 871.7 308.6 870.7 302 870C295.5 869.3 290.5 869.3 283.2 866.9C275.8 864.6 264.8 859.7 257.9 855.8C251 851.9 246.7 848.4 241.6 843.6C236.5 838.8 231.7 833.7 227.3 827.2C222.8 820.8 218.1 812.3 215.1 804.9C212 797.5 210.2 790.7 209 782.7C207.8 774.6 207.7 763.9 208 756.5C208.3 749.1 209.7 743.8 211 738.2C212.4 732.6 213.2 729.3 216.1 723C219 716.8 222.9 708.2 228.3 700.8C233.7 693.4 242.9 683.9 248.5 678.5C254.1 673 256.4 672 261.8 668.3C267.2 664.5 271.6 661 281 656.1C290.4 651.3 307.4 643.3 318.1 639.1C328.8 634.9 336.6 633 345.3 631C354 629 362.6 627.7 370.5 627Z',
'M222.5 432C231 431.5 242.5 432 251.6 433C260.6 434 267.6 435.5 276.8 438C286 440.6 297 444.1 306.9 448.1C316.8 452.1 327.1 457.1 336 462.1C344.9 467.2 353 472.6 360.3 478.3C367.5 484 374.8 491.3 379.6 496.6C384.4 501.9 386.1 504.9 388.9 510C391.6 515.1 394.6 521.3 396 527.2C397.3 533.2 397.5 540 397 545.6C396.5 551.2 395.8 554.9 392.9 561C390 567.1 384.3 576.4 379.7 582.3C375.1 588.2 372.7 590.8 365.5 596.5C358.2 602.3 345.8 611.1 336 616.9C326.3 622.6 316.7 626.9 306.9 630.9C297.1 634.9 287.6 638.2 277 640.9C266.5 643.5 252.9 646 243.6 647C234.3 648 228.7 647.7 221.5 647C214.2 646.3 206.5 644.6 200.2 643C194 641.3 189.9 639.8 184 636.9C178.1 634 170.1 629.4 164.8 625.8C159.6 622.2 157.2 620.5 152.4 615.4C147.6 610.3 140.7 602.5 136.2 595.1C131.6 587.7 127.6 578 125 570.8C122.5 563.5 121.7 559 121 551.6C120.3 544.2 120.2 534.1 121 526.3C121.9 518.6 123.2 512.7 126.1 505.1C129 497.5 132.7 488.7 138.3 480.8C143.8 472.8 154.1 462.7 159.5 457.5C165 452.2 164.1 452.7 170.9 449.2C177.7 445.6 191.6 438.9 200.2 436.1C208.8 433.2 213.9 432.5 222.5 432Z',
'M304.5 208C311.2 207.3 316.9 207.3 323.6 208C330.3 208.7 337.6 209.9 344.8 212.1C352.1 214.2 360.3 217.6 367 221.1C373.8 224.7 379.6 228.6 385.4 233.4C391.2 238.2 395.6 242.1 401.7 249.7C407.8 257.3 416 268.8 421.8 278.9C427.7 289 432.9 300.4 436.9 310.1C440.9 319.8 443.4 327.2 446 337.2C448.5 347.3 451 361.2 452 370.4C453 379.6 452.7 385.7 452 392.6C451.3 399.5 450.1 405.8 447.9 411.8C445.7 417.9 442.9 424 438.8 429.2C434.7 434.3 428.2 439.5 423.2 442.8C418.2 446.1 413.9 447.4 408.8 449C403.7 450.5 399.3 451.7 392.5 452C385.7 452.3 375.9 451.7 368 451C360.2 450.3 354.4 450.2 345.3 448C336.1 445.8 323.8 442.1 313.1 437.9C302.4 433.7 289.5 427.4 281 422.9C272.4 418.3 267.2 414.5 261.8 410.7C256.4 407 254.1 406 248.5 400.5C242.9 395.1 233.7 385.6 228.3 378.2C222.9 370.8 219 362.2 216.1 356C213.2 349.7 212.4 346.4 211 340.8C209.7 335.2 208.3 329.9 208 322.5C207.7 315.1 207.8 304.4 209 296.3C210.2 288.3 212 281.5 215.1 274.1C218.1 266.7 222.8 258.2 227.3 251.8C231.7 245.3 236.5 240.2 241.6 235.4C246.7 230.6 251 227.1 257.9 223.2C264.8 219.3 275.4 214.6 283.2 212.1C290.9 209.5 297.7 208.7 304.5 208Z'
  ];
  var i, flor = '';
  for (i = 0; i < 8; i++) {
    flor += '<g class="far-op-pw" style="--d:' + i + '"><path class="far-op-petal" style="--d:' + i + '" d="' + P[i] + '" fill="' + C[i] + '"/></g>';
  }
  var FLOR = '<svg viewBox="0 0 1080 1080" aria-hidden="true"><g class="far-op-spin">' + flor + '</g></svg>';

  // pinceladas: [color, x inicio, x fin, altura, ancho]
  var S = [[0,70,400,70,50],[6,-40,300,148,42],[2,120,440,226,56],[4,-40,250,302,38],
           [7,80,420,372,48],[3,-40,330,446,52],[1,150,440,516,40],[5,10,270,580,46]];
  var paths = '';
  for (i = 0; i < S.length; i++) {
    var c = C[S[i][0]], x1 = S[i][1], x2 = S[i][2], y = S[i][3], w = S[i][4], m = (x2 - x1) / 3, d;
    d = (i % 2)
      ? 'M ' + x2 + ' ' + (y - 10) + ' C ' + (x2 - m) + ' ' + (y + 16) + ', ' + (x1 + m) + ' ' + (y - 10) + ', ' + x1 + ' ' + (y + 12)
      : 'M ' + x1 + ' ' + (y + 12) + ' C ' + (x1 + m) + ' ' + (y - 10) + ', ' + (x2 - m) + ' ' + (y + 16) + ', ' + x2 + ' ' + (y - 10);
    paths += '<path class="far-op-stroke" pathLength="1" d="' + d + '" stroke="' + c + '" stroke-width="' + w + '" style="--d:' + i + '"/>' +
             '<path class="far-op-stroke far-op-bristle" pathLength="1" d="' + d + '" stroke-width="4" transform="translate(0,' + (-w * .25) + ')" style="--d:' + i + '"/>' +
             '<path class="far-op-stroke far-op-bristle" pathLength="1" d="' + d + '" stroke-width="2.5" transform="translate(0,' + (w * .22) + ')" style="--d:' + i + '"/>';
  }
  var ARTE = '<div class="far-op-art" aria-hidden="true"><svg viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">' +
    '<defs><filter id="far-op-rough" x="-10%" y="-10%" width="120%" height="120%">' +
    '<feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="7"/>' +
    '<feDisplacementMap in="SourceGraphic" scale="14"/></filter></defs>' +
    '<g filter="url(#far-op-rough)" transform="rotate(-10 200 300)">' + paths + '</g></svg></div>';

  function flower(){
    var el = document.createElement('div');
    el.className = 'far-op-flower';
    el.innerHTML = FLOR;
    return el;
  }
  // Perfit arma el cartel cuando quiere y lo rehace al suscribirse: esto se asegura de que siempre tenga flor y pinceladas
  function ensure(){
    var forms = document.querySelectorAll('.p-layer form.p-optin'), f, img, col, ok, j;
    for (j = 0; j < forms.length; j++) {
      f = forms[j];
      if (!f.classList.contains('far-op')) f.classList.add('far-op');
      img = f.querySelector('.p-col-image');
      if (img && !img.querySelector('.far-op-art')) img.innerHTML = ARTE;
      col = f.querySelector('.p-col-form');
      if (col && !col.querySelector('.far-op-flower')) col.insertBefore(flower(), col.firstChild);
      ok = f.querySelector('.p-success');
      if (ok && !ok.querySelector('.far-op-flower')) ok.insertBefore(flower(), ok.firstChild);
    }
  }
  ensure();
  new MutationObserver(ensure).observe(document.body, { childList: true, subtree: true });
})();
