const testInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

const input = `$ cd /
$ ls
165965 cmwllbzl.jlm
68612 ggb.qgd
dir gwnwqcgq
dir pdlpwdp
211084 qgcn.rbj
dir sbps
179881 sdpjprfb.lsh
318082 tdhgd.lwf
dir wvdlv
$ cd gwnwqcgq
$ ls
dir btddw
310195 cqsblt.jwb
dir ggb
dir hhdfbj
dir hrj
dir mdhln
dir nwbndtgl
dir pjmc
dir rgb
dir sdpjprfb
169518 tbswl.btw
$ cd btddw
$ ls
315327 hjs.dcw
dir pjmc
99361 pmqmgjsw.rqn
$ cd pjmc
$ ls
227980 cfbfmprt
dir hml
310835 mmcrfwdr.sps
170798 rhgmnqz
dir sdpjprfb
178337 vphwlqqw.dlt
dir wnmh
dir zqcnhs
$ cd hml
$ ls
dir fjtwgcw
194693 ggb
175159 ldbhqdbd
dir mzthvdms
90811 qgbrczz.dhh
118942 qvfdwcpn.cmv
227596 rhgmnqz
dir tnvsdr
dir vplhff
$ cd fjtwgcw
$ ls
16046 gfr
277037 jwpzm.vhn
291671 trpvvs.zgh
$ cd ..
$ cd mzthvdms
$ ls
244911 cqsblt.jwb
37587 gplsqzr.nwn
313958 tqrz.wfd
$ cd ..
$ cd tnvsdr
$ ls
185961 qgbrczz.dhh
85515 wjgvlj.qcq
$ cd ..
$ cd vplhff
$ ls
dir trjdm
$ cd trjdm
$ ls
244126 nhv.vgt
795 vlnwhgsc.tzm
$ cd ..
$ cd ..
$ cd ..
$ cd sdpjprfb
$ ls
dir htvgnrrl
$ cd htvgnrrl
$ ls
240529 cfbfmprt
$ cd ..
$ cd ..
$ cd wnmh
$ ls
dir gccwr
322372 qgbrczz.dhh
dir rlhn
184351 tpfzqcs
$ cd gccwr
$ ls
290656 tswtgpd.jsp
$ cd ..
$ cd rlhn
$ ls
208348 gfr
$ cd ..
$ cd ..
$ cd zqcnhs
$ ls
dir dtfrbzgn
dir phhdmp
11336 pjmc.jwv
5056 qgbrczz.dhh
$ cd dtfrbzgn
$ ls
132783 gbvcnv
dir ghbwbc
298563 pjmc
81684 sdpjprfb
$ cd ghbwbc
$ ls
dir zgvwrms
$ cd zgvwrms
$ ls
296919 tlm.rlb
$ cd ..
$ cd ..
$ cd ..
$ cd phhdmp
$ ls
dir ggb
$ cd ggb
$ ls
316842 jrmgt.mqw
196423 qrb.hpd
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ggb
$ ls
108630 cqsblt.jwb
dir fdmst
216771 fzvcgf
135624 gfr
dir pdwln
dir sdpjprfb
$ cd fdmst
$ ls
dir gcq
20042 ldgpzcbr
dir nnp
dir pjmc
dir qng
dir sdpjprfb
$ cd gcq
$ ls
132662 lvg.jpb
$ cd ..
$ cd nnp
$ ls
229401 css.qfj
17421 pjmc.hgp
$ cd ..
$ cd pjmc
$ ls
317512 pjmc.qph
$ cd ..
$ cd qng
$ ls
241771 cvlnwltp
91504 qgbrczz.dhh
$ cd ..
$ cd sdpjprfb
$ ls
82422 sdpjprfb.ljt
$ cd ..
$ cd ..
$ cd pdwln
$ ls
dir sdpjprfb
$ cd sdpjprfb
$ ls
285618 ltfcmg.chw
$ cd ..
$ cd ..
$ cd sdpjprfb
$ ls
58655 cqsblt.jwb
$ cd ..
$ cd ..
$ cd hhdfbj
$ ls
2937 pslftrf.nqf
$ cd ..
$ cd hrj
$ ls
25769 bcpl.shg
dir dfdtszr
dir ggb
3722 hdwqmgwf
dir nssjjtp
300324 qrvtsrs
100487 rhgmnqz
dir sdpjprfb
dir tmdtrqsl
248216 tswtgpd.jsp
$ cd dfdtszr
$ ls
dir hfmnrlvj
dir plzr
dir zpspcph
$ cd hfmnrlvj
$ ls
237362 cqsblt.jwb
$ cd ..
$ cd plzr
$ ls
295398 bjw.nlg
$ cd ..
$ cd zpspcph
$ ls
87660 pjmc
$ cd ..
$ cd ..
$ cd ggb
$ ls
dir jtpb
dir rsptqbh
$ cd jtpb
$ ls
249820 bfdl.jmv
dir dggzszwn
dir ggb
dir whms
$ cd dggzszwn
$ ls
233228 lrhwrh.mqm
$ cd ..
$ cd ggb
$ ls
dir tcrjcmq
88734 tsbggqvp.fjl
$ cd tcrjcmq
$ ls
36677 wfdtbgf.hft
$ cd ..
$ cd ..
$ cd whms
$ ls
dir ggb
dir pjmc
dir vtgcdprq
$ cd ggb
$ ls
dir sdpjprfb
$ cd sdpjprfb
$ ls
177878 jhbdqn
$ cd ..
$ cd ..
$ cd pjmc
$ ls
35345 swmcmqq.clm
$ cd ..
$ cd vtgcdprq
$ ls
293766 gfr
$ cd ..
$ cd ..
$ cd ..
$ cd rsptqbh
$ ls
dir csvpjd
239634 fszzvprc.phh
240240 tswtgpd.jsp
dir zjvc
$ cd csvpjd
$ ls
218253 rndllvcd
$ cd ..
$ cd zjvc
$ ls
98002 cqsblt.jwb
$ cd ..
$ cd ..
$ cd ..
$ cd nssjjtp
$ ls
63947 tswtgpd.jsp
$ cd ..
$ cd sdpjprfb
$ ls
dir cgczvvbg
30257 flbhswlb.ccd
dir qdqdv
dir vqhps
$ cd cgczvvbg
$ ls
dir bntjhfd
22048 ggb.jrv
142476 qgbrczz.dhh
dir rchlvjb
dir vfrrnf
164431 wjfll.zdw
$ cd bntjhfd
$ ls
217858 hpt.jll
$ cd ..
$ cd rchlvjb
$ ls
208149 qrdrwtfw.dbd
100353 vhs
$ cd ..
$ cd vfrrnf
$ ls
3071 jdz
$ cd ..
$ cd ..
$ cd qdqdv
$ ls
26265 nvtr.ndw
$ cd ..
$ cd vqhps
$ ls
288263 gfr
317973 gfvsbqc
284249 lqpwzz
dir njstt
dir rbhd
185897 vssw
$ cd njstt
$ ls
313561 jgq.mvw
110742 qgbrczz.dhh
$ cd ..
$ cd rbhd
$ ls
11259 cqsblt.jwb
dir gchzg
286309 ltfcmg.chw
dir qmsntzj
dir sdpjprfb
281719 srfgltg.nrz
83632 tswtgpd.jsp
141859 vrv.sll
dir vsg
dir wbqshdm
$ cd gchzg
$ ls
dir phnz
$ cd phnz
$ ls
212607 mdrgcdl.vfp
$ cd ..
$ cd ..
$ cd qmsntzj
$ ls
87958 gfr
$ cd ..
$ cd sdpjprfb
$ ls
110482 ggb.wnf
$ cd ..
$ cd vsg
$ ls
232499 sdpjprfb
$ cd ..
$ cd wbqshdm
$ ls
dir pjmc
$ cd pjmc
$ ls
273630 pjmc
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd tmdtrqsl
$ ls
139366 sqfj.hrg
$ cd ..
$ cd ..
$ cd mdhln
$ ls
dir bftszdgn
dir crhbc
dir ggb
dir jhmvgjrr
dir pjmc
dir sgpnzv
$ cd bftszdgn
$ ls
206539 cplch.dsb
201607 cqsblt.jwb
207839 gdz.plv
dir ggb
72021 ltfcmg.chw
dir nddh
106046 wvf.zvc
$ cd ggb
$ ls
242347 cqsblt.jwb
272603 ltfcmg.chw
273519 nrrz.dfj
5628 pjmc
$ cd ..
$ cd nddh
$ ls
243243 ltfcmg.chw
$ cd ..
$ cd ..
$ cd crhbc
$ ls
dir ccw
dir ggb
120001 ltfcmg.chw
dir pcqcswz
120308 qgbrczz.dhh
dir sscfn
dir vpsj
$ cd ccw
$ ls
dir fgghhg
dir pjmc
$ cd fgghhg
$ ls
238488 czpsmdm
150925 ggb
134050 qgbrczz.dhh
$ cd ..
$ cd pjmc
$ ls
138343 sdpjprfb.bmh
$ cd ..
$ cd ..
$ cd ggb
$ ls
157435 rffmjwpm
dir sdpjprfb
dir tbd
dir zgmffgdz
$ cd sdpjprfb
$ ls
dir jwjpwbdj
$ cd jwjpwbdj
$ ls
88782 tswtgpd.jsp
$ cd ..
$ cd ..
$ cd tbd
$ ls
203640 vclsjppl.jws
$ cd ..
$ cd zgmffgdz
$ ls
203870 ggb
dir jhcrw
$ cd jhcrw
$ ls
70775 gfr
$ cd ..
$ cd ..
$ cd ..
$ cd pcqcswz
$ ls
260246 zlwc.rnh
$ cd ..
$ cd sscfn
$ ls
75162 bjtwwgf
dir cfthmzh
265717 ggb
230679 gsbj.nzd
17708 ltfcmg.chw
dir pdgwcshp
dir ztrpvlbh
$ cd cfthmzh
$ ls
296793 chgws.qfd
187701 pjmc
29681 qgbrczz.dhh
$ cd ..
$ cd pdgwcshp
$ ls
dir cfbfmprt
dir lqbh
dir rrtpqd
$ cd cfbfmprt
$ ls
dir rwflz
$ cd rwflz
$ ls
33792 gtt.qcl
dir jrblfq
dir rldtppt
$ cd jrblfq
$ ls
224257 cqsblt.jwb
$ cd ..
$ cd rldtppt
$ ls
dir nzgg
$ cd nzgg
$ ls
139560 fhbw.vhm
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd lqbh
$ ls
dir mhdbp
dir nqsz
$ cd mhdbp
$ ls
dir ggb
28344 wtc.cfd
$ cd ggb
$ ls
dir hwdtp
220117 rvdpjmgt.szq
$ cd hwdtp
$ ls
288606 cqsblt.jwb
$ cd ..
$ cd ..
$ cd ..
$ cd nqsz
$ ls
197106 dpjfbs.rvc
55173 pjl
$ cd ..
$ cd ..
$ cd rrtpqd
$ ls
178 pjmc
$ cd ..
$ cd ..
$ cd ztrpvlbh
$ ls
201371 bhb.pmw
188328 ddqjnzvw.rdd
206451 tswtgpd.jsp
$ cd ..
$ cd ..
$ cd vpsj
$ ls
5614 cqsblt.jwb
300968 ctmdnwgt.pgj
$ cd ..
$ cd ..
$ cd ggb
$ ls
dir ggb
14512 hzgq.tsb
302375 pjmc.tlj
dir thhgz
282216 zdsbj
dir zrzmb
$ cd ggb
$ ls
180980 brpqch.plw
42195 ltfcmg.chw
322227 qgbrczz.dhh
$ cd ..
$ cd thhgz
$ ls
74145 cfbfmprt.cmp
253851 gfr
272552 gsb
dir pgfqw
276958 tswtgpd.jsp
$ cd pgfqw
$ ls
193634 ggb.zjg
185688 qrml.bvv
$ cd ..
$ cd ..
$ cd zrzmb
$ ls
dir chjmbq
84603 gfr
dir rbms
253620 sbscbqg.jfg
$ cd chjmbq
$ ls
dir svmvlm
$ cd svmvlm
$ ls
251057 nhjwcjj.dgz
$ cd ..
$ cd ..
$ cd rbms
$ ls
72618 tswtgpd.jsp
$ cd ..
$ cd ..
$ cd ..
$ cd jhmvgjrr
$ ls
189022 cqsblt.jwb
172682 djp.npm
dir gdfgtz
147256 ggb
dir ghv
dir pjmc
110715 rhgmnqz
dir sdpjprfb
dir tjlf
183342 tswtgpd.jsp
$ cd gdfgtz
$ ls
268771 cqsblt.jwb
190140 dgrwz
248802 sdpjprfb.dpw
$ cd ..
$ cd ghv
$ ls
dir ggb
dir npqbngg
304352 qzjtnr.qcf
dir sdpjprfb
$ cd ggb
$ ls
285635 ltfcmg.chw
dir vzfdbtg
$ cd vzfdbtg
$ ls
dir pqmb
$ cd pqmb
$ ls
219019 ggb.nmh
$ cd ..
$ cd ..
$ cd ..
$ cd npqbngg
$ ls
dir cfbfmprt
242286 cqsblt.jwb
dir hrqfqpzr
dir nsnfq
dir rggzmfqm
dir wjdnwg
$ cd cfbfmprt
$ ls
34347 cqsblt.jwb
dir gpnzggqb
dir nvdqw
dir qdtcwm
dir ssgg
$ cd gpnzggqb
$ ls
dir pjmc
dir pqbf
dir qjpwm
192404 tswtgpd.jsp
88344 vdb.rzm
dir zjglfpt
$ cd pjmc
$ ls
dir pjmc
142330 psbppvhn
168892 qgbrczz.dhh
18858 vzzc.mtd
135911 zmjhz.tdv
$ cd pjmc
$ ls
197370 mlf
36218 nwq.njv
$ cd ..
$ cd ..
$ cd pqbf
$ ls
233005 gfr
$ cd ..
$ cd qjpwm
$ ls
129132 qqmrm.jrj
6309 tswtgpd.jsp
$ cd ..
$ cd zjglfpt
$ ls
186963 qgbrczz.dhh
$ cd ..
$ cd ..
$ cd nvdqw
$ ls
147955 fcgrqq
224829 gfr
$ cd ..
$ cd qdtcwm
$ ls
36443 ltfcmg.chw
$ cd ..
$ cd ssgg
$ ls
250574 jddfdj
$ cd ..
$ cd ..
$ cd hrqfqpzr
$ ls
143568 pjmc
dir sdpjprfb
dir shcrrpc
$ cd sdpjprfb
$ ls
88050 rhgmnqz
$ cd ..
$ cd shcrrpc
$ ls
dir pjmc
dir pwnnmpm
$ cd pjmc
$ ls
dir wbj
$ cd wbj
$ ls
196127 gfr
$ cd ..
$ cd ..
$ cd pwnnmpm
$ ls
dir cgghrf
dir rhgmnqz
dir vnbvq
$ cd cgghrf
$ ls
108742 lbpfnccl.mtj
$ cd ..
$ cd rhgmnqz
$ ls
89791 qgbrczz.dhh
$ cd ..
$ cd vnbvq
$ ls
48961 ltfcmg.chw
241813 qgbrczz.dhh
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd nsnfq
$ ls
dir tgdqz
$ cd tgdqz
$ ls
dir ggb
$ cd ggb
$ ls
dir rhgmnqz
$ cd rhgmnqz
$ ls
268661 cfbfmprt.tbl
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd rggzmfqm
$ ls
177501 qqn
55857 sdpjprfb.srj
$ cd ..
$ cd wjdnwg
$ ls
147729 lsjvsmsv
242095 pjmc
237172 sdpjprfb.cwf
dir sqh
203791 tswtgpd.jsp
dir zgfz
$ cd sqh
$ ls
44848 cfbfmprt
214010 cqsblt.jwb
175692 gfr
107978 lgsncr
$ cd ..
$ cd zgfz
$ ls
184114 cfbfmprt.gpf
207186 qgbrczz.dhh
$ cd ..
$ cd ..
$ cd ..
$ cd sdpjprfb
$ ls
73238 hfbvz
$ cd ..
$ cd ..
$ cd pjmc
$ ls
210824 cqsblt.jwb
dir pllr
dir tqqjp
$ cd pllr
$ ls
dir fshjdzp
210365 ltfcmg.chw
dir rfbdg
96591 rhgmnqz.wbc
dir rzzwcb
123059 tswtgpd.jsp
dir zzcw
$ cd fshjdzp
$ ls
143719 sdpjprfb
$ cd ..
$ cd rfbdg
$ ls
242103 wllggqm.wcg
$ cd ..
$ cd rzzwcb
$ ls
dir rhgmnqz
$ cd rhgmnqz
$ ls
80525 cqsblt.jwb
$ cd ..
$ cd ..
$ cd zzcw
$ ls
260646 jtgzqh
$ cd ..
$ cd ..
$ cd tqqjp
$ ls
245089 vszrfcc
$ cd ..
$ cd ..
$ cd sdpjprfb
$ ls
7514 cfbfmprt.dvj
$ cd ..
$ cd tjlf
$ ls
dir pjmc
$ cd pjmc
$ ls
230234 cfbfmprt.mqf
197486 gfr
$ cd ..
$ cd ..
$ cd ..
$ cd pjmc
$ ls
19935 fblsvg.btt
dir fgvv
dir ggb
222906 gjl.zrv
84255 jfqqjzbd
dir pjmc
$ cd fgvv
$ ls
94831 dgn
312078 tswtgpd.jsp
132961 vzbl.mnq
$ cd ..
$ cd ggb
$ ls
dir hfcr
310301 msdr.wnh
$ cd hfcr
$ ls
318041 dnp.lcn
dir mjrhdq
dir qwvfg
$ cd mjrhdq
$ ls
18541 ctrrm.ljc
247841 pjmc
$ cd ..
$ cd qwvfg
$ ls
128875 clvgmp.cvb
138276 cqsblt.jwb
26303 tswtgpd.jsp
$ cd ..
$ cd ..
$ cd ..
$ cd pjmc
$ ls
106609 ltfcmg.chw
$ cd ..
$ cd ..
$ cd sgpnzv
$ ls
218397 ltfcmg.chw
233365 sdpjprfb.mfd
$ cd ..
$ cd ..
$ cd nwbndtgl
$ ls
dir fsdvzvvv
198516 sdpjprfb.shs
$ cd fsdvzvvv
$ ls
209527 ggb
dir llwbm
dir lzz
99039 msgsztv.hnq
104248 rhgmnqz
$ cd llwbm
$ ls
187895 ghr.crq
274721 qpr.gnm
dir qrrs
$ cd qrrs
$ ls
260559 mnmhqww
$ cd ..
$ cd ..
$ cd lzz
$ ls
dir tnmwncgl
dir wrjjmhz
$ cd tnmwncgl
$ ls
301449 hqz
$ cd ..
$ cd wrjjmhz
$ ls
145193 mdv
73533 zjwlt.vqf
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd pjmc
$ ls
40049 cqsblt.jwb
169928 gvwcdhvn
314117 qgbrczz.dhh
$ cd ..
$ cd rgb
$ ls
dir bvwn
57953 cqsblt.jwb
240228 fvdpqr.vdz
173344 ltfcmg.chw
dir pjmc
28301 sdpjprfb.qlh
$ cd bvwn
$ ls
dir cfbfmprt
dir fjmbvhh
dir ggb
dir pdgsf
dir sdpjprfb
$ cd cfbfmprt
$ ls
dir vndbzj
234044 zmlrt.zwb
$ cd vndbzj
$ ls
dir cfbfmprt
$ cd cfbfmprt
$ ls
dir ptzpcqh
$ cd ptzpcqh
$ ls
141535 cqsblt.jwb
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd fjmbvhh
$ ls
244287 gfr
146029 rhgmnqz.bsq
$ cd ..
$ cd ggb
$ ls
279627 tswtgpd.jsp
$ cd ..
$ cd pdgsf
$ ls
dir fjdlhn
21454 qncpwnsw.jnc
49920 sdpjprfb.mmp
318538 tswtgpd.jsp
$ cd fjdlhn
$ ls
dir rhgmnqz
$ cd rhgmnqz
$ ls
209357 wggmwlfm
$ cd ..
$ cd ..
$ cd ..
$ cd sdpjprfb
$ ls
39774 rhgmnqz.wrv
$ cd ..
$ cd ..
$ cd pjmc
$ ls
115169 flhtvnq.gzc
147102 ltfcmg.chw
279604 rnn.cpc
$ cd ..
$ cd ..
$ cd sdpjprfb
$ ls
170481 rhgmnqz
48045 szgwfcl.tlh
110279 tnfdmgfl
$ cd ..
$ cd ..
$ cd pdlpwdp
$ ls
dir fwsbsprp
dir gjjjwznz
dir jzpwnpmc
dir qlvfslzp
dir sdpjprfb
59208 tswtgpd.jsp
$ cd fwsbsprp
$ ls
177666 rhczscsq.gmb
$ cd ..
$ cd gjjjwznz
$ ls
163647 cpft.fvj
60316 gfr
$ cd ..
$ cd jzpwnpmc
$ ls
dir cfbfmprt
dir gpd
46041 ltfcmg.chw
$ cd cfbfmprt
$ ls
16870 cqsblt.jwb
dir slj
$ cd slj
$ ls
291893 gdjb.rfv
$ cd ..
$ cd ..
$ cd gpd
$ ls
159168 qgbrczz.dhh
$ cd ..
$ cd ..
$ cd qlvfslzp
$ ls
dir clnms
102746 ggb.tth
35817 pjmc.hsc
dir sdpjprfb
296043 sgf.ssl
dir sqhbbsbj
134188 wbhbmbm.bpz
153495 zdjmnjt.smn
$ cd clnms
$ ls
dir ggb
$ cd ggb
$ ls
305684 rhgmnqz.bht
$ cd ..
$ cd ..
$ cd sdpjprfb
$ ls
29970 ghsjjc
$ cd ..
$ cd sqhbbsbj
$ ls
150243 pjmc.mzd
$ cd ..
$ cd ..
$ cd sdpjprfb
$ ls
dir cfbfmprt
dir qnhl
$ cd cfbfmprt
$ ls
dir ggb
$ cd ggb
$ ls
158203 jtcfv.mvc
dir qnqcb
$ cd qnqcb
$ ls
71245 cqsblt.jwb
$ cd ..
$ cd ..
$ cd ..
$ cd qnhl
$ ls
dir sdpjprfb
$ cd sdpjprfb
$ ls
306685 cqsblt.jwb
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd sbps
$ ls
251286 cqsblt.jwb
dir pjmc
213946 rhgmnqz.nzh
13484 zhzslc.bvp
$ cd pjmc
$ ls
9892 tswtgpd.jsp
249059 wjb.rwq
$ cd ..
$ cd ..
$ cd wvdlv
$ ls
314303 qlbqgp.njq`;

export { testInput, input };
