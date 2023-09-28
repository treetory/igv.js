const sampleTable =
    [
      "Linking_id\tSubtype\tsil_width\tGENDER\tKarnScore\tAgeAtFirstDiagnosis\tSecondary or Recurrent\tSurvival (days)\tVITALSTATUS\tCensured\tMGMT_methylated\t% Tumor Nuclei\t% Necrosis",
      "TCGA-02-0001\tClassical\t-0.135526414\tFEMALE\t80\t45\tRec\t221\tDEAD\t0\t\t97.5\t0",
      "TCGA-02-0002\tNeural\t-0.069669747\tMALE\tNA\tNA\tNo\tNA\tDEAD\t0\t\t97.5\t5",
      "TCGA-02-0003\tProneural\t0.207223343\tMALE\t100\t50\tNo\t144\tDEAD\t0\t\t100\t12.5",
      "TCGA-02-0004\tMesenchymal\t0.343562936\tMALE\tNA\t59\tNo\t345\tDEAD\t0\t\t97.5\t7.5",
      "TCGA-02-0006\tMesenchymal\t0.170480132\tFEMALE\t90\t56\tNo\t558\tDEAD\t0\t\t100\t7.5",
      "TCGA-02-0007\tProneural\t0.01155373\tFEMALE\t90\t42\tRec\t187\tDEAD\t0\t\t100\t7.5",
      "TCGA-02-0009\tClassical\t0.262354644\tFEMALE\t90\t61\tNo\t322\tDEAD\t0\t\t100\t5",
      "TCGA-02-0010\tProneural\t0.421156343\tFEMALE\t80\t22\tSec\t493\tDEAD\t0\t\t100\t5",
      "TCGA-02-0011\tProneural\t0.276830393\tFEMALE\t90\t19\tNo\t630\tDEAD\t0\t\t100\t2.5",
      "TCGA-02-0014\tProneural\t0.4144512\tMALE\t100\t26\tNo\t2512\tDEAD\t0\t\t100\t2.5",
      "TCGA-02-0015\tClassical\t-0.066561833\tMALE\tNA\t50\tNo\t627\tDEAD\t0\t\t100\t15",
      "TCGA-02-0016\tClassical\t0.071235193\tMALE\tNA\t50\tNo\t859\tDEAD\t0\tMethylated\t87.5\t0",
      "TCGA-02-0021\tClassical\t0.276330293\tFEMALE\t90\t45\tRec\t2104\tDEAD\t0\t\t100\t7.5",
      "TCGA-02-0023\tClassical\t0.079292594\tFEMALE\tNA\t38\tNo\t612\tDEAD\t0\t\t100\t2.5",
      "TCGA-02-0024\tProneural\t0.374207219\tMALE\t100\t40\tRec\t214\tDEAD\t0\t\t87.5\t7.5",
      "TCGA-02-0025\tMesenchymal\t0.385248047\tMALE\tNA\t48\tNo\t1300\tDEAD\t0\t\t100\t20",
      "TCGA-02-0026\tProneural\t0.366177964\tMALE\tNA\t27\tNo\t748\tDEAD\t0\t\t100\t22.5",
      "TCGA-02-0027\tClassical\t0.027240031\tFEMALE\t100\t34\tNo\t370\tDEAD\t0\t\t100\t12.5",
      "TCGA-02-0028\tProneural\t0.221351107\tMALE\t100\t46\tSec\t74\tDEAD\t0\tMethylated\t100\t20",
      "TCGA-02-0033\tMesenchymal\t0.435883167\tMALE\t100\t55\tNo\t86\tDEAD\t0\t\t100\t15",
      "TCGA-02-0034\tMesenchymal\t0.375636901\tMALE\t80\t61\tNo\t430\tDEAD\t0\t\t100\t15",
      "TCGA-02-0037\tClassical\t-0.036040059\tFEMALE\t90\t74\tNo\t110\tDEAD\t0\t\t100\t17.5",
      "TCGA-02-0038\tClassical\t0.023632439\tFEMALE\t80\t49\tNo\t326\tDEAD\t0\t\t100\t12.5",
      "TCGA-02-0039\tMesenchymal\t0.193550485\tMALE\tNA\t54\tNo\t583\tDEAD\t0\t\t100\t12.5",
      "TCGA-02-0043\tClassical\t0.17831233\tFEMALE\t90\t56\tRec\t125\tDEAD\t0\tMethylated\t100\t20",
      "TCGA-02-0046\tProneural\t0.238203419\tMALE\t70\t61\tNo\t209\tDEAD\t0\t\t100\t10",
      "TCGA-02-0047\tProneural\t0.128054411\tMALE\t90\t79\tNo\t448\tDEAD\t0\t\t92.5\t5",
      "TCGA-02-0048\tProneural\t0.145138572\tMALE\tNA\t80\tNo\t98\tDEAD\t0\t\t100\t5",
      "TCGA-02-0051\tMesenchymal\t0.333325009\tMALE\tNA\t45\tNo\t46\tDEAD\t0\t\t100\t20",
      "TCGA-02-0052\tNeural\t-0.040029613\tMALE\t90\t49\tNo\t383\tDEAD\t0\t\t100\t12.5",
      "TCGA-02-0054\tMesenchymal\t0.063750538\tFEMALE\t90\t44\tNo\t199\tDEAD\t0\tMethylated\t95\t2.5",
      "TCGA-02-0055\tMesenchymal\t0.418365191\tFEMALE\t90\t62\tNo\t76\tDEAD\t0\t\t95\t15",
      "TCGA-02-0057\tNeural\t0.012480395\tFEMALE\t90\t67\tRec\t131\tDEAD\t0\t\t100\t12.5",
      "TCGA-02-0058\tProneural\t-0.123252152\tFEMALE\t90\t29\tRec\t82\tDEAD\t0\tMethylated\t97.5\t0",
      "TCGA-02-0059\tMesenchymal\t0.422077223\tMALE\tNA\t69\tNo\t291\tDEAD\t0\t\t100\t22.5",
      "TCGA-02-0060\tProneural\t0.109344037\tFEMALE\t80\t66\tNo\t183\tDEAD\t0\t\t92.5\t17.5",
      "TCGA-02-0064\tMesenchymal\t0.368693722\tMALE\t100\t49\tNo\t600\tDEAD\t0\tMethylated\t100\t2.5",
      "TCGA-02-0068\tClassical\t-0.02076099\tMALE\tNA\t57\tNo\t602\tDEAD\t0\t\t97.5\t12.5",
      "TCGA-02-0069\tProneural\t0.347024096\tFEMALE\tNA\t31\tNo\t1261\tDEAD\t0\tMethylated\t97.5\t0",
      "TCGA-02-0070\tClassical\t0.053903275\tMALE\tNA\t71\tNo\t498\tDEAD\t0\t\t100\t2.5",
      "TCGA-02-0071\tClassical\t-0.035006428\tMALE\tNA\t53\tNo\t167\tDEAD\t0\t\t100\t10",
      "TCGA-02-0074\tProneural\t0.363031477\tFEMALE\t90\t68\tNo\t310\tDEAD\t0\t\t100\t12.5",
      "TCGA-02-0075\tMesenchymal\t0.282679685\tMALE\tNA\t64\tNo\t635\tDEAD\t0\t\t100\t7.5",
      "TCGA-02-0079\tMesenchymal\t0.259610167\tMALE\tNA\t56\tNo\t748\tDEAD\t0\t\t92.5\t0",
      "TCGA-02-0080\tProneural\t0.215391741\tMALE\t90\t35\tRec\t362\tDEAD\t0\t\t100\t13.5",
      "TCGA-02-0083\tNeural\t-0.03796757\tFEMALE\t90\t60\tRec\t277\tDEAD\t0\tMethylated\t100\t20",
      "TCGA-02-0084\tProneural\t0.006015761\tFEMALE\tNA\t34\tNo\t1115\tDEAD\t0\t\t100\t2.5",
      "TCGA-02-0085\tMesenchymal\t0.01688474\tFEMALE\tNA\t66\tNo\t1325\tDEAD\t0\tMethylated\t92.5\t0",
      "TCGA-02-0086\tMesenchymal\t0.254711485\tFEMALE\t100\t46\tNo\t268\tDEAD\t0\t\t100\t20",
      "TCGA-02-0087\tProneural\t0.134315757\tFEMALE\tNA\t28\tNo\t1022\tDEAD\t0\t\t100\t0",
      "TCGA-02-0089\tNeural\t0.041700849\tMALE\t100\t54\tRec\t142\tDEAD\t0\t\t100\t10",
      "TCGA-02-0099\tMesenchymal\t0.144296922\tMALE\t80\t47\tRec\t103\tDEAD\t0\tMethylated\t97.5\t7.5",
      "TCGA-02-0102\tClassical\t0.173196439\tMALE\t100\t44\tSec\t372\tDEAD\t0\t\t97.5\t15",
      "TCGA-02-0104\tProneural\t0.265926124\tFEMALE\tNA\t33\tNo\t520\tDEAD\t0\t\t100\t5",
      "TCGA-02-0106\tMesenchymal\t0.203177872\tMALE\tNA\t55\tNo\t159\tDEAD\t0\t\t100\t7.5",
      "TCGA-02-0107\tMesenchymal\t0.323437252\tMALE\t90\t57\tRec\t211\tDEAD\t0\t\t92.5\t10",
      "TCGA-02-0111\tMesenchymal\t0.380238924\tMALE\tNA\t57\tNo\t705\tDEAD\t0\tMethylated\t90\t17.5",
      "TCGA-02-0113\tNeural\t0.036873712\tFEMALE\tNA\t49\tRec\t904\tDEAD\t0\t\t97.5\t7.5",
      "TCGA-02-0114\tProneural\t0.358768163\tFEMALE\t90\t45\tSec\t337\tDEAD\t0\tMethylated\t100\t12.5",
      "TCGA-02-0115\tNeural\t0.175023297\tMALE\tNA\t53\tNo\t385\tDEAD\t0\tMethylated\t100\t0",
      "TCGA-02-0260\tClassical\t0.133581066\tMALE\tNA\t55\tNo\t515\tDEAD\t0\t\t85\t20",
      "TCGA-02-0266\tClassical\t-0.046139224\tMALE\tNA\t15\tNo\t539\tDEAD\t0\t\t100\t22.5",
      "TCGA-02-0269\tClassical\t0.241679735\tMALE\tNA\t69\tNo\t327\tDEAD\t0\tMethylated\t100\t2.5",
      "TCGA-02-0271\tClassical\t-0.027963316\tMALE\tNA\t26\tNo\t440\tDEAD\t0\tMethylated\t100\t30",
      "TCGA-02-0281\tProneural\t0.335801758\tFEMALE\tNA\t79\tNo\t121\tDEAD\t0\tMethylated\t100\t5",
      "TCGA-02-0285\tClassical\t0.072966507\tFEMALE\tNA\t50\tNo\t422\tDEAD\t0\t\t100\t30",
      "TCGA-02-0289\tClassical\t0.270625032\tMALE\tNA\t58\tNo\t432\tDEAD\t0\t\t100\t7.5",
      "TCGA-02-0290\tClassical\t0.079141684\tMALE\tNA\t49\tNo\t485\tDEAD\t0\tMethylated\t100\t7.5",
      "TCGA-02-0317\tClassical\t0.27082311\tMALE\tNA\t40\tNo\t372\tDEAD\t0\t\t100\t32.5",
      "TCGA-02-0321\tProneural\t0.075223989\tMALE\tNA\t14\tNo\t298\tDEAD\t0\tMethylated\t100\t27.5",
      "TCGA-02-0325\tProneural\t0.255920739\tMALE\tNA\t62\tNo\t323\tDEAD\t0\t\t100\t20",
      "TCGA-02-0326\tMesenchymal\t0.015077399\tFEMALE\tNA\t83\tNo\t223\tDEAD\t0\t\t85\t10",
      "TCGA-02-0330\tMesenchymal\t-0.05255352\tFEMALE\tNA\t51\tNo\t484\tDEAD\t0\t\t97\t2.5",
      "TCGA-02-0332\tMesenchymal\t-0.062000548\tFEMALE\tNA\t47\tNo\t51\tDEAD\t0\tMethylated\t100\t27.5",
      "TCGA-02-0333\tClassical\t0.267708227\tFEMALE\tNA\t78\tNo\t133\tDEAD\t0\tMethylated\t100\t32.5",
      "TCGA-02-0337\tMesenchymal\t0.147682798\tMALE\tNA\t48\tNo\t764\tDEAD\t0\t\t95\t20",
      "TCGA-02-0338\tProneural\t0.358227502\tMALE\tNA\t42\tNo\t322\tDEAD\t0\t\t100\t5",
      "TCGA-02-0339\tProneural\t0.392271707\tMALE\tNA\t67\tNo\t377\tDEAD\t0\t\t100\t0",
      "TCGA-02-0422\tClassical\t0.230745938\tMALE\tNA\t50\tNo\t441\tDEAD\t0\tMethylated\t100\t25",
      "TCGA-02-0430\tClassical\t0.238915417\tFEMALE\tNA\t67\tNo\t321\tDEAD\t0\t\t100\t7.5",
      "TCGA-02-0432\tProneural\t0.200342773\tMALE\tNA\t36\tNo\t1433\tDEAD\t0\t\t92.5\t5",
      "TCGA-02-0439\tProneural\t0.066425798\tFEMALE\tNA\t70\tNo\t20\tDEAD\t0\t\t90\t40",
      "TCGA-02-0440\tProneural\t0.339463783\tMALE\tNA\t63\tNo\t345\tDEAD\t0\t\t97.5\t7.5",
      "TCGA-02-0446\tProneural\t0.130276262\tMALE\tNA\t62\tNo\t282\tDEAD\t0\t\t85\t10",
      "TCGA-02-0451\tNeural\t0.15396319\tFEMALE\tNA\t62\tNo\t493\tDEAD\t0\t\t92.5\t5",
      "TCGA-06-0122\tMesenchymal\t0.151364179\tFEMALE\t70\t85\tNo\t181\tDEAD\t0\t\t100\t20",
      "TCGA-06-0124\tMesenchymal\t0.262045823\tMALE\t70\t67\tNo\t620\tDEAD\t0\tMethylated\t100\t10",
      "TCGA-06-0125\tClassical\t0.232557932\tFEMALE\t70\t64\tNo\t1448\tDEAD\t0\t\t100\t5",
      "TCGA-06-0126\tClassical\t0.09755071\tMALE\t70\t87\tNo\t211\tDEAD\t0\t\t100\t0",
      "TCGA-06-0127\tClassical\t-0.13328769\tMALE\t60\t67\tNo\t121\tDEAD\t0\t\t97.5\t7.5",
      "TCGA-06-0128\tProneural\t0.147027001\tMALE\t90\t66\tNo\t691\tDEAD\t0\t\t97.5\t7.5",
      "TCGA-06-0129\tProneural\t0.266015396\tMALE\t100\t31\tNo\t1024\tDEAD\t0\t\t97.5\t0",
      "TCGA-06-0130\tMesenchymal\t0.394096747\tMALE\t90\t54\tNo\t358\tDEAD\t0\t\t80\t5",
      "TCGA-06-0132\tNeural\t0.17579762\tMALE\tNA\t50\tNo\t295\tALIVE\t1\t\t97.5\t2.5",
      "TCGA-06-0133\tNeural\t0.343534284\tMALE\tNA\t64\tNo\t435\tDEAD\t0\t\t100\t0",
      "TCGA-06-0137\tClassical\t0.221526248\tFEMALE\t90\t64\tNo\t812\tDEAD\t0\t\t92.5\t2.5",
      "TCGA-06-0138\tNeural\t0.141827973\tMALE\t90\t43\tNo\t737\tDEAD\t0\t\t97.5\t2.5",
      "TCGA-06-0139\tMesenchymal\t0.406666929\tMALE\t60\t40\tNo\t362\tDEAD\t0\t\t95\t0",
      "TCGA-06-0143\tMesenchymal\t0.179468852\tMALE\t70\t59\tNo\t357\tDEAD\t0\t\t82.5\t37.5",
      "TCGA-06-0145\tClassical\t0.2097492\tFEMALE\tNA\t54\tNo\t71\tDEAD\t0\tMethylated\t100\t5",
      "TCGA-06-0146\tProneural\t0.336645341\tFEMALE\tNA\t34\tNo\t611\tDEAD\t0\tMethylated\t97.5\t10",
      "TCGA-06-0147\tMesenchymal\t0.436205683\tFEMALE\tNA\t51\tNo\t541\tDEAD\t0\t\t100\t22.5",
      "TCGA-06-0148\tClassical\t0.064330558\tMALE\tNA\t76\tNo\t307\tDEAD\t0\t\t100\t15",
      "TCGA-06-0149\tMesenchymal\t0.15528369\tFEMALE\t90\t75\tNo\t262\tDEAD\t0\tMethylated\t100\t17.5",
      "TCGA-06-0152\tMesenchymal\t0.054799171\tMALE\tNA\t68\tNo\t373\tDEAD\t0\t\t97\t36.5",
      "TCGA-06-0154\tMesenchymal\t0.206112952\tMALE\t100\t55\tNo\t424\tDEAD\t0\t\t95\t35",
      "TCGA-06-0156\tProneural\t0.14576367\tMALE\tNA\t57\tNo\t148\tDEAD\t0\t\t97.5\t5",
      "TCGA-06-0157\tClassical\t-0.022377645\tFEMALE\t50\t63\tNo\t97\tDEAD\t0\t\t97.5\t5",
      "TCGA-06-0158\tClassical\t-0.025693185\tMALE\t80\t74\tNo\t161\tDEAD\t0\t\t97.5\t2.5",
      "TCGA-06-0160\tNeural\t0.033366097\tNA\tNA\tNA\tNo\tNA\tNA\t0\t\t0\t0",
      "TCGA-06-0162\tNeural\t0.29945534\tFEMALE\t60\t47\tNo\t97\tDEAD\t0\t\t90\t0",
      "TCGA-06-0164\tMesenchymal\t0.36325546\tMALE\t100\t48\tNo\t1731\tDEAD\t0\t\t100\t15",
      "TCGA-06-0166\tProneural\t0.170893483\tMALE\tNA\t52\tNo\t178\tDEAD\t0\t\t92.5\t30",
      "TCGA-06-0167\tNeural\t0.068260331\tNA\tNA\tNA\tNo\tNA\tNA\t0\t\t0\t0",
      "TCGA-06-0168\tMesenchymal\t-0.041323139\tFEMALE\t100\t60\tNo\t598\tDEAD\t0\t\t92.5\t30",
      "TCGA-06-0171\tNeural\t0.120704077\tMALE\t100\t66\tNo\t399\tDEAD\t0\t\t92.5\t5",
      "TCGA-06-0173\tNeural\t0.084929651\tFEMALE\tNA\t73\tNo\t136\tDEAD\t0\tMethylated\t95\t17.5",
      "TCGA-06-0174\tProneural\t0.323523476\tMALE\t80\t54\tNo\t98\tDEAD\t0\tMethylated\t97.5\t10",
      "TCGA-06-0175\tMesenchymal\t0.117554096\tMALE\t100\t70\tNo\t123\tDEAD\t0\t\t90\t0",
      "TCGA-06-0176\tMesenchymal\t0.324259993\tMALE\t90\t35\tNo\t954\tALIVE\t1\t\t92.5\t35",
      "TCGA-06-0177\tProneural\t0.269598906\tMALE\t70\t64\tNo\t127\tDEAD\t0\t\t92.5\t2.5",
      "TCGA-06-0178\tNeural\t-0.064188114\tMALE\tNA\t39\tNo\t1168\tALIVE\t1\t\t100\t0",
      "TCGA-06-0179\tNeural\t0.213349878\tMALE\t70\t64\tNo\t616\tDEAD\t0\tMethylated\t90\t5",
      "TCGA-06-0182\tNeural\t0.020297625\tMALE\t60\t77\tNo\t111\tDEAD\t0\t\t100\t10",
      "TCGA-06-0184\tMesenchymal\t0.110092916\tMALE\t90\t64\tNo\t907\tALIVE\t1\t\t95\t5",
      "TCGA-06-0185\tNeural\t0.08537733\tMALE\t100\t55\tNo\t846\tALIVE\t1\tMethylated\t100\t5",
      "TCGA-06-0187\tClassical\t0.070748686\tMALE\t70\t69\tNo\t414\tALIVE\t1\tMethylated\t100\t10",
      "TCGA-06-0188\tNeural\t-0.096977301\tMALE\t100\t71\tNo\t389\tALIVE\t1\t\t95\t10",
      "TCGA-06-0189\tMesenchymal\t0.34683701\tMALE\tNA\t56\tNo\t468\tDEAD\t0\t\t100\t32.5",
      "TCGA-06-0190\tMesenchymal\t0.353060608\tMALE\t80\t63\tNo\t317\tDEAD\t0\t\t100\t40",
      "TCGA-06-0194\tMesenchymal\t0.372201447\tFEMALE\tNA\t38\tNo\t17\tDEAD\t0\t\t96.5\t1",
      "TCGA-06-0195\tNeural\t0.087051072\tMALE\t100\t63\tNo\t225\tDEAD\t0\tMethylated\t90\t0",
      "TCGA-06-0197\tMesenchymal\t0.408465628\tFEMALE\tNA\t66\tNo\t169\tDEAD\t0\t\t90\t2.5",
      "TCGA-06-0208\tNeural\t0.155086939\tFEMALE\t80\t52\tNo\t256\tDEAD\t0\t\t100\t2.5",
      "TCGA-06-0210\tMesenchymal\t0.209882263\tFEMALE\tNA\t73\tNo\t225\tDEAD\t0\t\t92.5\t10",
      "TCGA-06-0211\tClassical\t0.149740386\tMALE\t100\t48\tNo\t360\tDEAD\t0\t\t92.5\t0",
      "TCGA-06-0214\tNeural\t0.159942209\tMALE\t40\t66\tNo\t457\tDEAD\t0\tMethylated\t92.5\t7.5",
      "TCGA-06-0219\tNeural\t0.271012333\tMALE\t40\t67\tNo\t15\tDEAD\t0\t\t100\t12.5",
      "TCGA-06-0221\tNeural\t0.051247652\tMALE\t40\t31\tNo\t603\tDEAD\t0\tMethylated\t90\t5",
      "TCGA-06-0237\tNeural\t0.199904732\tFEMALE\t40\t76\tNo\t415\tDEAD\t0\t\t100\t5",
      "TCGA-06-0238\tProneural\t0.108152605\tMALE\tNA\t47\tNo\t405\tDEAD\t0\t\t100\t5",
      "TCGA-06-0240\tNeural\t0.243369406\tNA\tNA\tNA\tNo\tNA\tNA\t0\t\t10\t0",
      "TCGA-06-0241\tProneural\t0.308672449\tFEMALE\t40\t66\tNo\t198\tALIVE\t1\tMethylated\t100\t7.5",
      "TCGA-06-0394\tClassical\t-0.008148917\tMALE\tNA\t52\tNo\t329\tDEAD\t0\t\t85\t2.5",
      "TCGA-06-0397\tMesenchymal\t0.197693998\tFEMALE\tNA\t57\tNo\t268\tDEAD\t0\tMethylated\t85\t25",
      "TCGA-06-0402\tClassical\t0.151616368\tMALE\tNA\t71\tNo\t8\tDEAD\t0\tMethylated\t92.5\t10",
      "TCGA-06-0409\tMesenchymal\t0.327606285\tMALE\tNA\t44\tNo\t2152\tDEAD\t0\tMethylated\t82.5\t27.5",
      "TCGA-06-0410\tProneural\t0.256898034\tFEMALE\tNA\t77\tNo\t143\tDEAD\t0\t\t90\t10",
      "TCGA-06-0412\tMesenchymal\t0.113365202\tFEMALE\tNA\t56\tNo\t291\tDEAD\t0\t\t85\t17.5",
      "TCGA-06-0413\tProneural\t0.394903688\tFEMALE\tNA\t78\tNo\t96\tDEAD\t0\tMethylated\t85\t12.5",
      "TCGA-06-0414\tProneural\t0.311537938\tMALE\t100\t64\tNo\t1068\tDEAD\t0\tMethylated\t87.5\t7.5",
      "TCGA-06-0644\tMesenchymal\t0.343686357\tMALE\t80\t72\tNo\t122\tALIVE\t1\t\t95\t20",
      "TCGA-06-0645\tMesenchymal\t0.316936085\tFEMALE\tNA\t56\tNo\t98\tALIVE\t1\tMethylated\t97.5\t15",
      "TCGA-06-0646\tProneural\t0.051065952\tMALE\t90\t61\tNo\t175\tDEAD\t0\t\t95\t7.5",
      "TCGA-06-0648\tProneural\t0.359617705\tMALE\t90\t78\tNo\t77\tALIVE\t1\tMethylated\t100\t10",
      "TCGA-08-0244\tClassical\t-0.010220033\tMALE\t90\t62\tNo\t690\tDEAD\t0\t\t90\t1",
      "TCGA-08-0245\tProneural\t0.297410295\tFEMALE\tNA\t32\tNo\t1151\tDEAD\t0\t\t95\t2",
      "TCGA-08-0246\tClassical\t0.001256484\tFEMALE\t70\t57\tNo\t127\tDEAD\t0\t\t87.5\t15",
      "TCGA-08-0344\tProneural\t0.343816167\tMALE\t100\t66\tNo\t3524\tDEAD\t0\t\t87.5\t0",
      "TCGA-08-0345\tProneural\t-0.074307551\tFEMALE\t70\t71\tNo\t53\tDEAD\t0\t\t85\t0",
      "TCGA-08-0346\tMesenchymal\t0.274562302\tMALE\t80\t70\tNo\t256\tDEAD\t0\t\t92.5\t12.5",
      "TCGA-08-0347\tProneural\t0.171019706\tMALE\t90\t50\tNo\t782\tDEAD\t0\tMethylated\t80\t0",
      "TCGA-08-0348\tProneural\t0.292871925\tMALE\t90\t64\tNo\t370\tDEAD\t0\t\t92.5\t15",
      "TCGA-08-0349\tNeural\t0.113293095\tMALE\t90\t46\tNo\t298\tDEAD\t0\t\t85\t12.5",
      "TCGA-08-0350\tProneural\t0.290395108\tMALE\t90\t33\tNo\t889\tDEAD\t0\tMethylated\t92.5\t10",
      "TCGA-08-0351\tProneural\t-0.030350271\tMALE\t100\t41\tNo\t1932\tDEAD\t0\t\t82.5\t2.5",
      "TCGA-08-0352\tMesenchymal\t0.166218899\tMALE\tNA\t80\tNo\t39\tDEAD\t0\t\t80\t15",
      "TCGA-08-0353\tProneural\t0.040380923\tMALE\tNA\t58\tNo\t397\tDEAD\t0\t\t85\t32.5",
      "TCGA-08-0354\tClassical\t0.045547674\tFEMALE\tNA\t53\tNo\t546\tDEAD\t0\tMethylated\t90\t12.5",
      "TCGA-08-0355\tClassical\t0.039006104\tFEMALE\tNA\t30\tNo\t747\tDEAD\t0\t\t92.5\t7.5",
      "TCGA-08-0356\tClassical\t-0.000119787\tFEMALE\tNA\t60\tNo\t945\tDEAD\t0\t\t87.5\t32.5",
      "TCGA-08-0357\tClassical\t0.136163768\tMALE\tNA\t50\tNo\t1143\tDEAD\t0\t\t95\t7.5",
      "TCGA-08-0358\tClassical\t0.108519913\tMALE\t90\t50\tNo\t678\tDEAD\t0\t\t95\t7.5",
      "TCGA-08-0359\tProneural\t0.101501164\tFEMALE\tNA\t60\tNo\t103\tDEAD\t0\tMethylated\t87.5\t5",
      "TCGA-08-0360\tMesenchymal\t0.396407288\tMALE\tNA\t76\tNo\t468\tDEAD\t0\t\t82.5\t20",
      "TCGA-08-0375\tClassical\t0.123564179\tFEMALE\tNA\t52\tNo\t371\tDEAD\t0\t\t100\t17.5",
      "TCGA-08-0380\tNeural\t0.142134069\tFEMALE\t80\t75\tNo\t455\tDEAD\t0\t\t100\t2.5",
      "TCGA-08-0385\tProneural\t0.360735346\tMALE\tNA\t72\tNo\t82\tDEAD\t0\t\t100\t7.5",
      "TCGA-08-0386\tNeural\t0.021925452\tMALE\t90\t74\tNo\t548\tDEAD\t0\tMethylated\t97.5\t7.5",
      "TCGA-08-0389\tNeural\t-0.052320938\tMALE\tNA\t59\tNo\t467\tDEAD\t0\t\t95\t0",
      "TCGA-08-0390\tMesenchymal\t0.172029334\tMALE\t80\t69\tNo\t425\tDEAD\t0\t\t95\t2.5",
      "TCGA-08-0392\tMesenchymal\t0.243920082\tMALE\tNA\t60\tNo\t14\tDEAD\t0\t\t100\t15",
      "TCGA-08-0509\tMesenchymal\t0.244458498\tMALE\tNA\t64\tNo\t383\tDEAD\t0\t\t97.5\t7.5",
      "TCGA-08-0510\tMesenchymal\t0.14729116\tMALE\t80\t76\tNo\t130\tDEAD\t0\t\t100\t10",
      "TCGA-08-0511\tClassical\t0.202604763\tMALE\tNA\t69\tNo\t235\tDEAD\t0\tMethylated\t95\t10",
      "TCGA-08-0512\tMesenchymal\t0.35072954\tMALE\t90\t49\tNo\t1282\tDEAD\t0\t\t100\t37.5",
      "TCGA-08-0514\tClassical\t0.098998919\tFEMALE\tNA\t70\tNo\t337\tDEAD\t0\tMethylated\t100\t15",
      "TCGA-08-0516\tClassical\t-0.003905071\tMALE\tNA\t15\tNo\t596\tDEAD\t0\t\t100\t2.5",
      "TCGA-08-0517\tProneural\t0.236692004\tFEMALE\t70\tNA\tRec\tNA\tDEAD\t0\tMethylated\t100\t0",
      "TCGA-08-0518\tClassical\t0.204110492\tFEMALE\tNA\t60\tNo\t588\tDEAD\t0\t\t100\t30",
      "TCGA-08-0520\tNeural\t0.176154931\tMALE\tNA\t71\tNo\t327\tDEAD\t0\t\t90\t17.5",
      "TCGA-08-0521\tClassical\t-0.008367976\tMALE\tNA\t17\tNo\t146\tDEAD\t0\t\t92.5\t12.5",
      "TCGA-08-0522\tMesenchymal\t0.331197169\tMALE\tNA\t61\tNo\t635\tDEAD\t0\t\t87.5\t37.5",
      "TCGA-08-0524\tProneural\t0.397134204\tFEMALE\tNA\t18\tNo\t221\tDEAD\t0\t\t90\t10",
      "TCGA-08-0525\tClassical\t-0.022735531\tMALE\t80\tNA\tSec\tNA\tDEAD\t0\t\t90\t12.5",
      "TCGA-08-0529\tClassical\t0.236981427\tFEMALE\tNA\t56\tNo\t560\tDEAD\t0\t\t92.5\t7.5",
      "TCGA-08-0531\tClassical\t0.212500104\tMALE\tNA\t64\tNo\t230\tDEAD\t0\t\t80\t7.5",
      "TCGA-12-0615\tClassical\t-0.033414585\tFEMALE\t70\t78\tNo\t467\tDEAD\t0\t\t100\t25",
      "TCGA-12-0616\tProneural\t0.221935128\tFEMALE\t100\t37\tNo\t448\tDEAD\t0\t\t100\t27.5",
      "TCGA-12-0618\tProneural\t0.318631501\tMALE\t70\t49\tNo\t395\tDEAD\t0\t\t100\t6.5",
      "TCGA-12-0619\tMesenchymal\t0.268237642\tMALE\t90\t60\tNo\t1062\tDEAD\t0\tMethylated\t100\t7.5",
      "TCGA-12-0620\tMesenchymal\t0.145715364\tMALE\t100\t58\tNo\t318\tDEAD\t0\t\t100\t7.5"
    ]

export { sampleTable }